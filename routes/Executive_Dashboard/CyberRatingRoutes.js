const express = require("express");
const auth = require("../../services/authServices");
const {
  createCyberRating,
  getCyberRatings,
  getCyberRating,
  updateCyberRating,
  deleteCyberRating,
} = require("../../services/Executive_Dashboard/CyberRatingServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getCyberRatings);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getCyberRating);
router.route("/").post(createCyberRating);
router.route("/:id").patch(updateCyberRating).delete(deleteCyberRating);
module.exports = router;
