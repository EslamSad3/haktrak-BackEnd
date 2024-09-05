const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyVolume,
  getQuarterlyVolume,
  getQuarterlyVolumes,
  updateQuarterlyVolume,
  deleteQuarterlyVolume,
} = require("../../services/Executive_Dashboard/QuarterlyVolumeServices");

const router = express.Router();

router.route("/").get(getQuarterlyVolumes);
router.route("/:id").get(getQuarterlyVolume);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createQuarterlyVolume);
router.route("/:id").patch(updateQuarterlyVolume).delete(deleteQuarterlyVolume);
module.exports = router;
