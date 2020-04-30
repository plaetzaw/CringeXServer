const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

let db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/upload", (req, res) => {
  let user = parseInt(req.body.userId);
  let url = req.body.videoUrl;
  console.log(user);
  console.log(url);
  console.log(typeof(user))
  console.log(typeof(url))

  let post = db.videos.build({
    userId: user,
    videoUrl: url,
  })
  post.save()
  .then(()=>{
    res.sendStatus(200)
  })
  .catch((err)=>{console.error(err)})
});

module.exports = router;
