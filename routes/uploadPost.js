const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const auth = require("../functions/jwtAuth");

let db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/upload", auth, (req, res) => {
  let user = req.user.id;
  let url = req.body.videoUrl;
  let postType = req.body.postType;
  let caption = req.body.caption;

  console.log(user);
  console.log(url);
  console.log(typeof user);
  console.log(typeof url);
  console.log(req.body.videoUrl);

  console.log("Trying to find content type");
  console.log(req.body);
  console.log(req.body.postType);

  let post = db.videos.build({
    userId: user,
    videoUrl: url,
    contentType: postType,
    caption: caption,
  });

  console.log("Building the post with the following");
  console.log(post);

  post
    .save()
    .then(() => {
      console.log("Saving post to database...");
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
