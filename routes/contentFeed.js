const express = require("express");
const router = express.Router();
const jwtAuth = require("../functions/jwtAuth");

let db = require("../models");

router.get("/feed", jwtAuth, (req, res) => {
  db.videos
    .findAll({
      include: [
        {
          model: db.user,
          required: true,
        },
      ],
    })
    .then((videos) => {
      res.json(videos);
    });
});

module.exports = router;
