const express = require("express");
const router = express.Router();

let db = require("../models");

router.get("/profile", (req, res) => {
  let username = req.body.name;
  let bio = req.body.bio;
  let pictureUrl = req.body.pictureUrl;
});
