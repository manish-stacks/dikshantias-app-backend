'use strict';
const express = require('express');
const router = express.Router();
const ScholarshipApplicationController = require('../controllers/ScholarshipApplicationController');

router.post('/', ScholarshipApplicationController.create);
router.get('/', ScholarshipApplicationController.findAll);
router.get('/:id', ScholarshipApplicationController.findOne);
router.put('/:id', ScholarshipApplicationController.update);
router.delete('/:id', ScholarshipApplicationController.delete);

module.exports = router;
