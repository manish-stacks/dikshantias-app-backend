'use strict';
const express = require('express');
const router = express.Router();
const AnnouncementController = require('../controllers/AnnouncementController');

router.post('/', AnnouncementController.create);
router.get('/', AnnouncementController.findAll);
router.get('/:id', AnnouncementController.findOne);
router.put('/:id', AnnouncementController.update);
router.delete('/:id', AnnouncementController.delete);

module.exports = router;
