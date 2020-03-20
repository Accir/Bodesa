const express = require('express')
const router = express.Router()
const db = require("../../config/database")
const cuttingMachine = require('../../models/machinesModel')

router.get('/', async (req, res) => {
  const { machineGroup } = req.query
  if (!machineGroup) {
    return res.send(JSON.stringify({ error: "Invalid input" }))
  }
  try {
    var results = await cuttingMachine.findAll({
      where: {
        group: machineGroup
      }
    })
  }
  catch (err) {
    console.log(err)
    return res.status(500).json({ error })
  }
  return res.json(results)
})

module.exports = router