'use strict';
const router = require("express").Router();
const ctrl = require("../controllers/ScholarshipResultController");
const auth = require("../middleware/auth");


router.post("/submit", auth, ctrl.submit);
router.get("/:scholarshipId/user/:userId", auth, ctrl.getUserResult);
module.exports = router;
