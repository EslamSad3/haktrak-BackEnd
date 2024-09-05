const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyCyberRating,
  getQuarterlyCyberRating,
  getQuarterlyCyberRatings,
  updateQuarterlyCyberRating,
  deleteQuarterlyCyberRating,
} = require("../../services/Executive_Dashboard/QuarterlyCyberRatingServices");

const router = express.Router();

router.route("/").get(getQuarterlyCyberRatings);
router.route("/:id").get(getQuarterlyCyberRating);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createQuarterlyCyberRating);
router
  .route("/:id")
  .patch(updateQuarterlyCyberRating)
  .delete(deleteQuarterlyCyberRating);
module.exports = router;
