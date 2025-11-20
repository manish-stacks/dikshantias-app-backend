const router = require('express').Router();
const ctrl = require('../controllers/notificationController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');
router.post('/', auth, role(['admin']), ctrl.createNotification);
router.get('/me', auth, ctrl.getUserNotifications);
module.exports = router;
