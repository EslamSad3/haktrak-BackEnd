const express = require("express");
const auth = require("../../services/authServices");
const {
  createMonthlyincident,
  getMonthlyincidents,
  getMonthlyincident,
  updateMonthlyincident,
  deleteMonthlyincident,
} = require("../../services/Reports/MonthlyincidentServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));

router.route("/").get(getMonthlyincidents);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getMonthlyincident);

router.route("/").post(createMonthlyincident);
router.route("/:id").patch(updateMonthlyincident).delete(deleteMonthlyincident);
module.exports = router;
