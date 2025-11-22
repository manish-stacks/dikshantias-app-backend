'use strict';
const express = require('express');
const router = express.Router();
const CourseProgressController = require('../controllers/CourseProgressController');

router.post('/', CourseProgressController.create);
router.get('/', CourseProgressController.findAll);
router.get('/:id', CourseProgressController.findOne);
router.put('/:id', CourseProgressController.update);
router.delete('/:id', CourseProgressController.delete);

module.exports = router;
