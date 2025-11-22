'use strict';
const express = require('express');
const router = express.Router();
const AppSettingController = require('../controllers/AppSettingController');

router.post('/', AppSettingController.create);
router.get('/', AppSettingController.findAll);
router.get('/:id', AppSettingController.findOne);
router.put('/:id', AppSettingController.update);
router.delete('/:id', AppSettingController.delete);

module.exports = router;
