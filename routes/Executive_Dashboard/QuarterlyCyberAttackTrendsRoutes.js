const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyCyberAttackTrends,
  getQuarterlyCyberAttackTrend,
  getQuarterlyCyberAttackTrends,
  updateQuarterlyCyberAttackTrends,
  deleteQuarterlyCyberAttackTrends,
} = require("../../services/Executive_Dashboard/QuarterlyCyberAttackTrendsServices");

const router = express.Router();

router.route("/").get(getQuarterlyCyberAttackTrends);
router.route("/:id").get(getQuarterlyCyberAttackTrend);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createQuarterlyCyberAttackTrends);
router
  .route("/:id")
  .patch(updateQuarterlyCyberAttackTrends)
  .delete(deleteQuarterlyCyberAttackTrends);
module.exports = router;
