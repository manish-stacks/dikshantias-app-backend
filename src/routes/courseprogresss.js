'use strict';
const router = require("express").Router();
const ctrl = require("../controllers/CourseProgressController");
const auth = require("../middleware/auth");


router.post("/", auth, ctrl.updateProgress);
router.get("/:userId/batch/:batchId", auth, ctrl.getBatchProgress);
router.get("/:userId/batch/:batchId/summary", auth, ctrl.getBatchCompletion);

module.exports = router;


