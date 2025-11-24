'use strict';
const express = require('express');
const router = express.Router();
const ScholarshipController = require('../controllers/ScholarshipController');

router.post('/', ScholarshipController.create);
router.get('/', ScholarshipController.findAll);
router.get('/:id', ScholarshipController.findOne);
router.put('/:id', ScholarshipController.update);
router.delete('/:id', ScholarshipController.delete);

module.exports = router;


/*


const router = require('express').Router();
const multer = require('multer');
const upload = multer();
const ctrl = require('../controllers/scholarshipController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');
router.post('/', auth, role(['admin']), ctrl.createScholarship);
router.post('/apply', auth, upload.single('file'), ctrl.apply);
router.get('/:id/results', auth, role(['admin']), ctrl.resultList);
module.exports = router;


*/