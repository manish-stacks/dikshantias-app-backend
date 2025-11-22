'use strict';
const express = require('express');
const router = express.Router();
const ScholarshipController = require('../controllers/ScholarshipController');

router.post('/', ScholarshipController.create);
router.get('/', ScholarshipController.findAll);
router.get('/:id', ScholarshipController.findOne);
router.put('/:id', ScholarshipController.update);
router.delete('/:id', ScholarshipController.delete);

module.exports = router;
