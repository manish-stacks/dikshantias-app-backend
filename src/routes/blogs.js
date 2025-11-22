'use strict';
const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');

router.post('/', BlogController.create);
router.get('/', BlogController.findAll);
router.get('/:id', BlogController.findOne);
router.put('/:id', BlogController.update);
router.delete('/:id', BlogController.delete);

module.exports = router;
