const express = require("express");
const auth = require("../services/authServices");
const {
  createAptFeed,
  getAptsFeeds,
  getAptFeeds,
  updateAptFeed,
  deleteAptFeed,
} = require("../services/aptsFeedsServices");
const {
  getAptFeedValidator,
  createAptFeedValidator,
  updateAptFeedValidator,
  deleteAptFeedValidator,
} = require("../utils/validators/aptsFeedsValidator");

const router = express.Router();

router.route("/").get(getAptsFeeds);
router.route("/:id").get(getAptFeedValidator, getAptFeeds);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createAptFeedValidator, createAptFeed);
router
  .route("/:id")
  .patch(updateAptFeedValidator, updateAptFeed)
  .delete(deleteAptFeedValidator, deleteAptFeed);
module.exports = router;
