const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyincident,
  getQuarterlyincidents,
  getQuarterlyincident,
  updateQuarterlyincident,
  deleteQuarterlyincident,
} = require("../../services/Executive_Dashboard/QuarterlyincidentServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getQuarterlyincidents);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getQuarterlyincident);

router.route("/").post(createQuarterlyincident);
router
  .route("/:id")
  .patch(updateQuarterlyincident)
  .delete(deleteQuarterlyincident);
module.exports = router;
