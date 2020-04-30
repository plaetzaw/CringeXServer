const express = require("express");
const router = express.Router();

let db = require("../models");

router.get("/feed", (req, res) => {
  db.videos.findAll()
  .then(videos=>{
    res.json(videos)
  })

  // res.send();
});
// "Shut up Jaye"

module.exports=router