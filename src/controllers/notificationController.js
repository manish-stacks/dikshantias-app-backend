const { Notification, UserNotification, User } = require('../models');

exports.createNotification = async (req, res) => {
  const { title, message, target_type, target_id } = req.body;
  const n = await Notification.create({ title, message, target_type, target_id });
  // fan-out based on type (simplified)
  if (target_type === 'all') {
    const users = await User.findAll();
    await Promise.all(users.map(u => UserNotification.create({ user_id: u.id, notification_id: n.id })));
  }
  res.json(n);
};

exports.getUserNotifications = async (req, res) => {
  const list = await UserNotification.findAll({ where: { user_id: req.user.id }});
  res.json(list);
};
