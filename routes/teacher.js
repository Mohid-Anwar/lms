var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Teacher Dashboard");
});

module.exports = router;
