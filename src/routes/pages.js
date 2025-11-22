'use strict';
const express = require('express');
const router = express.Router();
const PageController = require('../controllers/PageController');

router.post('/', PageController.create);
router.get('/', PageController.findAll);
router.get('/:id', PageController.findOne);
router.put('/:id', PageController.update);
router.delete('/:id', PageController.delete);

module.exports = router;
