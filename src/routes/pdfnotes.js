'use strict';
const express = require('express');
const router = express.Router();
const PDFNoteController = require('../controllers/PDFNoteController');

router.post('/', PDFNoteController.create);
router.get('/', PDFNoteController.findAll);
router.get('/:id', PDFNoteController.findOne);
router.put('/:id', PDFNoteController.update);
router.delete('/:id', PDFNoteController.delete);

module.exports = router;
