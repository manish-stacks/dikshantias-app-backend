'use strict';
const express = require('express');
const router = express.Router();
const MCQResultController = require('../controllers/MCQResultController');

router.post('/', MCQResultController.create);
router.get('/', MCQResultController.findAll);
router.get('/:id', MCQResultController.findOne);
router.put('/:id', MCQResultController.update);
router.delete('/:id', MCQResultController.delete);

module.exports = router;
