const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
let db = require("../models");
let bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  db.user
    .findOne({
      where: {
        email: email,
      },
    })
    .then((currentUser) => {
      if (currentUser) {
        bcrypt.compare(password, currentUser.password).then((correct) => {
          if (correct) {

            const username = currentUser.handle
            const id = currentUser.id
            const email = currentUser.email

            const user = { 
                id: id,
                name: username,
                email: email
            }
        
            const accessToken = jwt.sign(user, 'secret')
        
            res.json({accessToken : accessToken})
            console.log("user logged in");
            // MAKE SURE YOU SEND A RESPONSE FROM THE SERVER - OTHERWISE YOUR CLIENT SIDE WILL KEEP SPINNING

            // res.status(200).json({ message: "USER LOGGED IN" });
          } else {
            console.log("password is incorrect");
            // MAKE SURE YOU SEND A RESPONSE FROM THE SERVER - OTHERWISE YOUR CLIENT SIDE WILL KEEP SPINNING
          }
        });
      } else {
        console.log("no user found");

        // MAKE SURE YOU SEND A RESPONSE FROM THE SERVER - OTHERWISE YOUR CLIENT SIDE WILL KEEP SPINNING
      }
    });
});

module.exports = router;
