const express = require("express");
const auth = require("../../services/authServices");
const {
  createAttackTrend,
  getAttackTrends,
  getAttackTrend,
  updateAttackTrend,
  deleteAttackTrend,
} = require("../../services/Executive_Dashboard/AttackTrendServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getAttackTrends);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getAttackTrend);
router.route("/").post(createAttackTrend);
router.route("/:id").patch(updateAttackTrend).delete(deleteAttackTrend);
module.exports = router;
