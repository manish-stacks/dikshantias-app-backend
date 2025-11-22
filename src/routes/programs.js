'use strict';
const express = require('express');
const router = express.Router();
const ProgramController = require('../controllers/ProgramController');

router.post('/', ProgramController.create);
router.get('/', ProgramController.findAll);
router.get('/:id', ProgramController.findOne);
router.put('/:id', ProgramController.update);
router.delete('/:id', ProgramController.delete);

module.exports = router;
