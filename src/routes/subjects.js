'use strict';
const express = require('express');
const router = express.Router();
const SubjectController = require('../controllers/SubjectController');

router.post('/', SubjectController.create);
router.get('/', SubjectController.findAll);
router.get('/:id', SubjectController.findOne);
router.put('/:id', SubjectController.update);
router.delete('/:id', SubjectController.delete);

module.exports = router;
