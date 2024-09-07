const express = require("express");
const auth = require("../../services/authServices");
const {
  createSecurityEvent,
  getSecurityEvents,
  getSecurityEvent,
  updateSecurityEvent,
  deleteSecurityEvent,
} = require("../../services/Executive_Dashboard/SecurityEventServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getSecurityEvents);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getSecurityEvent);
router.route("/").post(createSecurityEvent);
router.route("/:id").patch(updateSecurityEvent).delete(deleteSecurityEvent);
module.exports = router;
