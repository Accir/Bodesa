const express = require('express')
const router = express.Router()
const db = require("../../config/database")
const user = require('../../models/userModel')

router.get('/', async (req, res) => {
    try {
        var response = await user.findAll()
    }
    catch (err) {
        console.log(err)
        return res.status(500).send(JSON.stringify({ error: "Internal server error" }))
    }
    return res.send(JSON.stringify(response))
})

module.exports = router;