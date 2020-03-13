const express = require("express");
const router = express.Router();
const db = require("../../config/database");
const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
const dotenv = require("dotenv");

router.post("/", (req, res) => {
  const user = User.findOrBuild({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (!user[1]) {
      res.send(JSON.stringify({ error: "User already exists" }));
    } else {
      bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          bcrypt.hash(req.body.password, salt, function(err, hash) {
            if (err) {
              console.log(err);
              res.sendStatus(500);
            } else {
              user[0].password = hash;
              user[0].name = req.body.name;
              user[0].surname = req.body.surname;
              user[0].id = Sequelize.UUIDV4;
              jwt.sign({ id: user[0].id, email: user[0].email }, process.env.KEY, function(err, token) {
                if (err) {
                  console.log(err);
                  res.send.Status(500);
                } else {
                  try {
                    res.setHeader("Content-Type", "application/json");
                    res.send(JSON.stringify({ token: token }));
                    user[0].save();
                  } catch {
                    res.send(JSON.stringify({ error: "Input/unkown error" }));
                  }
                }
              });
            }
          });
        }
      });
    }
  });
});

module.exports = router;
