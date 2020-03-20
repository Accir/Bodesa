const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");

router.post('/', (req, res) => {
  var token = req.body.token
  if (token !== undefined) {
    jwt.verify(token, process.env.KEY, { algorithms: ["HS256"] }, function (err, decoded) {

      if (err === null) {
        res.send(JSON.stringify("JWT verified"))
      }
      else if (err.name === 'TokenExpiredError') {
        res.send(JSON.stringify({ error: "Expired token" }))
      }
      else if (err.name === 'JsonWebTokenError') {
        res.send(JSON.stringify({ error: "Invalid token" }))
      }
      else {
        console.log(err)
        res.status(500).send(JSON.stringify({ error: "Internal server error" }))
      }
    })
  } else {
    res.send(JSON.stringify({ error: "Invalid input" }))
  }
})

module.exports = router;