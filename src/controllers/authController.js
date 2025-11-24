
const { User } = require('../models');
const bcrypt = require('bcrypt');
const { sign } = require('../utils/generateToken');
const redis = require('../config/redis');

function genOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

exports.signup = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    if (!email && !mobile) return res.status(400).json({ error: 'Email or mobile required' });

    const hashed = password ? await bcrypt.hash(password, 10) : null;
    const user = await User.create({ name, email, mobile, password: hashed });

    const otp = genOtp();
    await redis.set(`otp:${user.id}`, otp, 'EX', 600);

    await user.update({
      otp,
      otp_expiry: new Date(Date.now() + 10 * 60 * 1000)
    });

    res.json({
      status: 'success',
      message: 'User created. OTP sent (dev)',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        mobile: user.mobile
      },
    });
  } catch (err) {

    if (err.original && err.original.code === 'ER_DUP_ENTRY') {
      const msg = err.original.sqlMessage;
      const match = msg.match(/for key '(.+)'/);
      const field = match ? match[1] : 'field';

      return res.status(400).json({ error: `${field} already exists` });
    }

    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }

};

exports.requestOtp = async (req, res) => {
  try {
    const { mobile, email } = req.body;
    if (!mobile && !email) return res.status(400).json({ error: 'Provide mobile or email' });

    const user = await User.findOne({ where: mobile ? { mobile } : { email } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const otp = genOtp();
    await redis.set(`otp:${user.id}`, otp, 'EX', 600);

    await user.update({
      otp,
      otp_expiry: new Date(Date.now() + 10 * 60 * 1000)
    });

    res.json({ message: 'OTP sent (dev)', otp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};


exports.verifyOtp = async (req, res) => {
  try {
    const { user_id, otp } = req.body;
    const user = await User.findByPk(user_id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    const store = await redis.get(`otp:${user.id}`);
    const valid = (store && store === otp) || (user.otp === otp && user.otp_expiry > new Date());
    if (!valid) return res.status(400).json({ error: 'Invalid or expired OTP' });
    await redis.del(`otp:${user.id}`);

    user.otp = null;
    user.otp_expiry = null;
    user.is_verified = true;
    await user.save();

    const token = sign({ id: user.id, role: user.role, name: user.name });

    res.json({ token, user: { id: user.id, name: user.name, role: user.role } });
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
};

exports.login = async (req, res) => {
  try {
    const { mobile, email, password, otp } = req.body;
    if ((password) && (mobile || email)) {
      const user = await User.findOne({ where: mobile ? { mobile } : { email } });
      if (!user) return res.status(401).json({ error: 'Invalid credentials' });
      const ok = await bcrypt.compare(password, user.password);
      if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
      const token = sign({ id: user.id, role: user.role, name: user.name });
      return res.json({ token, user: { id: user.id, name: user.name, role: user.role } });
    } else if (otp && (mobile || email)) {
      const user = await User.findOne({ where: mobile ? { mobile } : { email } });
      if (!user) return res.status(404).json({ error: 'User not found' });
      const store = await redis.get(`otp:${user.id}`);
      const valid = (store && store === otp) || (user.otp === otp && user.otp_expiry > new Date());
      if (!valid) return res.status(400).json({ error: 'Invalid or expired OTP' });
      await redis.del(`otp:${user.id}`);
      user.otp = null;
      user.otp_expiry = null;
      user.is_verified = true;

      await user.save();
      const token = sign({ id: user.id, role: user.role, name: user.name });
      return res.json({ token, user: { id: user.id, name: user.name, role: user.role } });
    }
    return res.status(400).json({ error: 'Invalid request' });
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
};

exports.updateProfile = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    const { name, email, mobile, batch_id } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    if (mobile) user.mobile = mobile;
    if (batch_id) user.batch_id = batch_id;
    await user.save();
    res.json({
      message: 'Profile updated',
      user: { id: user.id, name: user.name, email: user.email, mobile: user.mobile, batch_id: user.batch_id }
    });
  } catch (err) { console.error(err); res.status(500).json({ error: 'Server error' }); }
};
