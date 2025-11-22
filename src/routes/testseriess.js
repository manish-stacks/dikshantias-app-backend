'use strict';
const express = require('express');
const router = express.Router();
const TestSeriesController = require('../controllers/TestSeriesController');

router.post('/', TestSeriesController.create);
router.get('/', TestSeriesController.findAll);
router.get('/:id', TestSeriesController.findOne);
router.put('/:id', TestSeriesController.update);
router.delete('/:id', TestSeriesController.delete);

module.exports = router;
