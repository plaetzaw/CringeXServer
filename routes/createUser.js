const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
let SALT = 15;
let db = require("../models");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/register", (req, res) => {
  let email = req.body.email;
  let handle = req.body.handle;
  let password = req.body.password;
  db.user
    .findOne({
      where: {
        email: email,
      },
    })
    .then((user) => {
      if (user) {
        console.log("email already exists"); // MUST INCLUDE A RESPONSE FOR THE SERVER TO REPLY TO THE CLIENT WITH
        // make sure you return a res from the server to kill this process. Console logging does not kill the process
      } else {
        db.user
          .findOne({
            where: {
              handle: handle,
            },
          })
          .then((user2) => {
            console.log("looking for handle...");
            if (user2) {
              console.log("handle already exists");
              // make sure you return a res from the server to kill this process. Console logging does not kill the process
            } else {
              bcrypt.hash(password, SALT).then((hash) => {
                console.log("hashing password....");
                let user = db.user.build({
                  email: email,
                  handle: handle,
                  password: hash,
                });
                user
                  .save()
                  .then(() =>
                    res.status(200).json({ message: "USER REGISTERED" })
                  )
                  .catch((err) => console.error(err));
              });
            }
          });
      }
    });
});

module.exports = router;
