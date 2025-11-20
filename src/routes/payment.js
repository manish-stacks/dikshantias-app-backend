const router = require('express').Router();
const ctrl = require('../controllers/paymentController');
const auth = require('../middleware/auth');
router.post('/create', auth, ctrl.createOrder);
router.post('/verify', auth, ctrl.verifyPayment);
module.exports = router;
