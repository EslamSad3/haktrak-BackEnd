const express = require("express");
const auth = require("../services/authServices");
const {
  createIoc,
  getIocs,
  getIoc,
  updateIoc,
  deleteIoc,
} = require("../services/iocsServices");
const {
  getIocValidator,
  createIocValidator,
  updateIocValidator,
  deleteIocValidator,
} = require("../utils/validators/iocsValidator");

const router = express.Router();

router.route("/").get(getIocs);
router.route("/:id").get(getIocValidator, getIoc);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createIocValidator, createIoc);
router
  .route("/:id")
  .patch(updateIocValidator, updateIoc)
  .delete(deleteIocValidator, deleteIoc);
module.exports = router;
