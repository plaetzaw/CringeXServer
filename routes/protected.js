const express = require("express");
const router = express.Router();
const jwtAuth = require("../functions/jwtAuth");

router.get("/protected", jwtAuth, (req, res) => {
  console.log(req.user);
  res.sendStatus(200);
});

module.exports = router;
