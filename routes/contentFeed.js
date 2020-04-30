const express = require("express");
const router = express.Router();

let db = require("../models");

router.get("/feed", (req, res) => {
  db.videos.findAll({
    include: [{
      model: db.user,
      required: true
     }]
  })
  .then(videos=>{
    res.json(videos)
  })
});

module.exports=router