const express = require("express");
const router = express.Router();
const db = require("../../config/database");
const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  if (req.body.email === undefined || req.body.password === undefined) {
    res.send(JSON.stringify({ error: "Invalid input" }));
  } else {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(response => {
      if (response) {
        bcrypt.compare(req.body.password, response.password, function(err, response) {
          if (!err) {
            if (response == true) {
              // Generate and send JWT here
              jwt.sign({ id: response.id, email: response.email }, process.env.KEY, function(err, token) {
                if (err) {
                  console.log(err);
                  res.send.Status(500);
                } else {
                  res.setHeader("Content-Type", "application/json");
                  res.send(JSON.stringify({ token: token }));
                }
              });
            } else {
              res.send(JSON.stringify({ error: "Access denied" }));
            }
          } else {
            console.log("Error: ", err);
            res.sendStatus(500);
          }
        });
      } else {
        res.send(JSON.stringify({ error: "User doesn't exist" }));
      }
    });
  }
});

module.exports = router;
