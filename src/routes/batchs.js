'use strict';
const express = require('express');
const router = express.Router();
const BatchController = require('../controllers/BatchController');

router.post('/', BatchController.create);
router.get('/', BatchController.findAll);
router.get('/:id', BatchController.findOne);
router.put('/:id', BatchController.update);
router.delete('/:id', BatchController.delete);

module.exports = router;
