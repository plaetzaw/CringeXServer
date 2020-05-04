const express = require("express");
const router = express.Router();

let db = require("../models");

router.post("/profile", (req, res) => {
  let username = req.body.name;
  let bio = req.body.bio;
  let pictureUrl = req.body.pictureUrl;
});

router.get("/profile", (req, res) => {
  db.user.findOne({
    where: {
      id : 1
    },
    include: [{
      model: db.videos,
      required: true
    },
    {
      model: db.profileData
    }]
  })
  .then(posts=>{
    
    let obj = {
      caption: posts.obj,
      contentType: posts.contentType,
      id: posts.id,
      user: {
        email: posts.user.email,
        handle: posts.user.handle,
        id: posts.user.id
      },
      videoUrl: posts.videoUrl
    }

    res.json(obj)
  })
})


module.exports = router;