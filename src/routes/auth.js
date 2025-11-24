const router = require('express').Router();
const ctrl = require('../controllers/AuthController');
const auth = require('../middleware/auth');

router.post('/signup', ctrl.signup);
router.post('/request-otp', ctrl.requestOtp);
router.post('/verify-otp', ctrl.verifyOtp);
router.post('/login', ctrl.login);
router.put('/profile', auth, ctrl.updateProfile);
module.exports = router;
