'use strict';
const express = require('express');
const router = express.Router();
const MCQQuestionController = require('../controllers/MCQQuestionController');

router.post('/', MCQQuestionController.create);
router.get('/', MCQQuestionController.findAll);
router.get('/:id', MCQQuestionController.findOne);
router.put('/:id', MCQQuestionController.update);
router.delete('/:id', MCQQuestionController.delete);

module.exports = router;
