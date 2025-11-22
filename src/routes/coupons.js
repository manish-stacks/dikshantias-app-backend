'use strict';
const express = require('express');
const router = express.Router();
const CouponController = require('../controllers/CouponController');

router.post('/', CouponController.create);
router.get('/', CouponController.findAll);
router.get('/:id', CouponController.findOne);
router.put('/:id', CouponController.update);
router.delete('/:id', CouponController.delete);

module.exports = router;
