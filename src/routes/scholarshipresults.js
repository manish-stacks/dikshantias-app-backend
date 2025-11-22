'use strict';
const express = require('express');
const router = express.Router();
const ScholarshipResultController = require('../controllers/ScholarshipResultController');

router.post('/', ScholarshipResultController.create);
router.get('/', ScholarshipResultController.findAll);
router.get('/:id', ScholarshipResultController.findOne);
router.put('/:id', ScholarshipResultController.update);
router.delete('/:id', ScholarshipResultController.delete);

module.exports = router;
