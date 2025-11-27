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



/*
const router = require('express').Router();
const multer = require('multer');
const upload = multer();
const ctrl = require('../controllers/pdfController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');
router.post('/upload', auth, role(['admin']), upload.single('file'), ctrl.uploadPdf);
router.get('/:id/token', auth, ctrl.generateDownloadToken);
module.exports = router;
*/