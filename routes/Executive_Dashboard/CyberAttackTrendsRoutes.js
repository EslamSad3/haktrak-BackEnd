const express = require("express");
const auth = require("../../services/authServices");
const {
  createCyberAttackTrends,
  getCyberAttackTrends,
  getCyberAttackTrend,
  updateCyberAttackTrends,
  deleteCyberAttackTrends,
} = require("../../services/Executive_Dashboard/CyberAttackTrendsServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getCyberAttackTrends);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getCyberAttackTrend);
router.route("/").post(createCyberAttackTrends);
router
  .route("/:id")
  .patch(updateCyberAttackTrends)
  .delete(deleteCyberAttackTrends);
module.exports = router;
