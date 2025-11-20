const { Order } = require('../models');
// Razorpay integration left as exercise; here simple order create locally
exports.createOrder = async (req, res) => {
  const { course_id, amount } = req.body;
  const order = await Order.create({ user_id: req.user.id, course_id, amount, status: 'created', order_id: 'rzp_'+Date.now() });
  res.json(order);
};

exports.verifyPayment = async (req, res) => {
  // verify signature in production
  const { order_id, status } = req.body;
  const o = await Order.findOne({ where: { order_id }});
  if (!o) return res.status(404).json({ error: 'Order not found' });
  o.status = status || 'paid'; await o.save();
  res.json(o);
};
