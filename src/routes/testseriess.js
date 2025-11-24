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

/*
const router = require('express').Router();
const multer = require('multer');
const upload = multer();
const ctrl = require('../controllers/testController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');
router.post('/', auth, role(['admin']), ctrl.createTest);
router.post('/mcq', auth, role(['admin']), ctrl.addMcq);
router.post('/submit-mcq', auth, ctrl.submitMcq);
router.post('/submit-subjective', auth, upload.single('file'), ctrl.uploadSubjective);
module.exports = router;
*/