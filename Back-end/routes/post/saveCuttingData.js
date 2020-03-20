const express = require("express");
const router = express.Router();
const db = require("../../config/database");
const glassCutting = require("../../models/glassCuttingModel");

router.post("/", async (req, res) => {
  const { machineId } = req.body;
  if (!machineId) {
    return res.send(JSON.stringify({ error: "Invalid input" }));
  }
  try {
    var result = await glassCutting.destroy({
      where: {
        machineId: machineId
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(JSON.stringify({ error: "Internal server error" }));
  }
  var error = false;
  var inputArray = new Array();
  req.body.data.forEach(element => {
    if (!element.thic || !element.prodType || !element.units || !element.coef || ![true, false].includes(element.tempering)) {
      error = true;
    } else {
      inputArray.push({
        machineId: machineId,
        tempering: element.tempering,
        glassThickness: element.thic,
        productionType: element.prodType,
        units: element.units,
        cuttingCoefficient: element.coef
      });
    }
  });
  if (error) {
    return res.send(JSON.stringify({ error: "Invalid input" }));
  }
  try {
    var result = await glassCutting.bulkCreate(inputArray);
  } catch (err) {
    console.log(err);
    return res.status(500).send(JSON.stringify({ error: "Internal server error" }));
  }
  return res.status(200).send(JSON.stringify("Success"));
});

module.exports = router;
