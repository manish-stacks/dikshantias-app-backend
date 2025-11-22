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
