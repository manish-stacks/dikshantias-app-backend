'use strict';
const express = require('express');
const router = express.Router();
const DownloadController = require('../controllers/DownloadController');

router.post('/', DownloadController.create);
router.get('/', DownloadController.findAll);
router.get('/:id', DownloadController.findOne);
router.put('/:id', DownloadController.update);
router.delete('/:id', DownloadController.delete);

module.exports = router;
