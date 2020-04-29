const express = require("express");
const router = express.Router();

let db = require("../models");

router.get("/feed", (req, res) => {
  db.user.findAll()
  .then(users=>{
    res.send(users)
  })

  // res.send();
});
// "Shut up Jaye"

module.exports=router