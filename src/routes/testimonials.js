'use strict';
const express = require('express');
const router = express.Router();
const TestimonialController = require('../controllers/TestimonialController');

router.post('/', TestimonialController.create);
router.get('/', TestimonialController.findAll);
router.get('/:id', TestimonialController.findOne);
router.put('/:id', TestimonialController.update);
router.delete('/:id', TestimonialController.delete);

module.exports = router;
