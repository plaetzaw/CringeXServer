const express = require("express");
const router = express.Router();
const auth = require('../functions/jwtAuth')

router.get("/protected", auth, (req, res) => {
    res.sendStatus(200)
});

module.exports = router;
