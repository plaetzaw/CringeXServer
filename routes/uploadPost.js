const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

let db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/upload", (req, res) => {
  let user = req.body.userId;
  let url = req.body.videoUrl;

  res.send("Hello, plz work");

  db.videos.build({
    userId: user,
    videoUrl: url,
  });
});

module.exports = router;
