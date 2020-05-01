const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const auth = require('../functions/jwtAuth')

let db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/upload", auth, (req, res) => {
  let user = req.user.id;
  let url = req.body.videoUrl;
  let postType = req.body.type;
  let caption = req.body.caption;
  console.log(user);
  console.log(url);
  console.log(typeof(user))
  console.log(typeof(url))

  let post = db.videos.build({
    userId: user,
    videoUrl: url,
    contentType: postType,
    caption: caption
  })
  post.save()
  .then(()=>{
    res.sendStatus(200)
  })
  .catch((err)=>{console.error(err)})
});

module.exports = router;
