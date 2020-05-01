require('dotenv').config()
const jwt = require('jsonwebtoken')

const jwtAuth = (req, res, next) => {

    if(req.headers["authorization"] != undefined){
    const authHeader = req.headers["authorization"]
    const token = authHeader.split(' ')[1]

    if(token==null) return res.sendStatus(401);

    jwt.verify(token, process.env.MY_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user
        next()
    })
    }
    else{
        res.sendStatus(403)
    }
}

module.exports = jwtAuth