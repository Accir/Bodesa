const express = require("express");
const router = express.Router();
const db = require("../../config/database");
const glassCutting = require("../../models/glassCuttingModel");

router.get("/", async (req, res) => {
  const { machine } = req.query;
  if (!machine) {
    return res.send(JSON.stringify({ error: "Invalid input" }));
  }
  try {
    var results = await glassCutting.findAll({
      where: {
        machineId: machine
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(JSON.stringify({ error: "Internal server error" }));
  }
  return res.send(JSON.stringify(results));
});

module.exports = router;
