const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.get("/", authController.author_list);

router.get("/chobi", function (req, res, next) {
  res.send("Hola chobis");
});

module.exports = router;
