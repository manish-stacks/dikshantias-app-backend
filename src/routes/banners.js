'use strict';
const express = require('express');
const router = express.Router();
const BannerController = require('../controllers/BannerController');

router.post('/', BannerController.create);
router.get('/', BannerController.findAll);
router.get('/:id', BannerController.findOne);
router.put('/:id', BannerController.update);
router.delete('/:id', BannerController.delete);

module.exports = router;
