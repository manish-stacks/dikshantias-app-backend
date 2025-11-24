'use strict';
const express = require('express');
const router = express.Router();
const VideoCourseController = require('../controllers/VideoCourseController');

router.post('/', VideoCourseController.create);
router.get('/', VideoCourseController.findAll);
router.get('/:id', VideoCourseController.findOne);
router.put('/:id', VideoCourseController.update);
router.delete('/:id', VideoCourseController.delete);

module.exports = router;



/*
const router = require('express').Router();
const ctrl = require('../controllers/courseController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');
router.post('/categories', auth, role(['admin']), ctrl.createCategory);
router.post('/subcategories', auth, role(['admin']), ctrl.createSubcategory);
router.post('/courses', auth, role(['admin']), ctrl.createCourse);
router.post('/videos', auth, role(['admin']), ctrl.uploadVideo);
router.post('/progress', auth, ctrl.progress);
module.exports = router;
*/