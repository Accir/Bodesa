const express = require('express')
const router = express.Router()
const db = require("../../config/database")
const User = require('../../models/userModel')

router.get('/', async (req, res) => {
    var { id } = req.query
    if (!id) {
        return res.send(JSON.stringify({ error: "Invalid input" }))
    }
    try {
        var result = await User.findOne({
            where: {
                id: id
            }
        })
    } catch (err) {
        console.log(err)
        return res.status(500).send(JSON.stringify({ error: "Internal server error" }))
    }
    return res.send(JSON.stringify(result))
})

module.exports = router;