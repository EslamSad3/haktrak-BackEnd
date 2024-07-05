const express = require("express");
const auth = require("../services/authServices");

const {
  createleakedcredentials,
  deleteleakedcredentials,
  getleakedcredentials,
  getAllleakedcredentials,
  updateleakedcredentials,
} = require("../services/leakedcredentialsServices");
const router = express.Router();

router.route("/").get(getAllleakedcredentials);
router.route("/:credentialsID").get(getleakedcredentials);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/").post(createleakedcredentials);
router.route("/:credentialsID").delete(deleteleakedcredentials);
router.route("/:credentialsID").patch(updateleakedcredentials);

module.exports = router;
