'use strict';
const express = require('express');
const router = express.Router();
const FAQController = require('../controllers/FAQController');

router.post('/', FAQController.create);
router.get('/', FAQController.findAll);
router.get('/:id', FAQController.findOne);
router.put('/:id', FAQController.update);
router.delete('/:id', FAQController.delete);

module.exports = router;
