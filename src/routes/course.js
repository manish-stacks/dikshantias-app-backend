const router = require('express').Router();
const ctrl = require('../controllers/courseController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.post('/categories', auth, role(['admin']), ctrl.createCategory);
router.post('/courses', auth, role(['admin']), ctrl.createCourse);
router.post('/videos', auth, role(['admin']), ctrl.uploadVideo);
router.post('/progress', auth, ctrl.progress);
module.exports = router;
