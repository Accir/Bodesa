const express = require('express')
const router = express.Router()
const db = require("../../config/database")
const model = require('../../models/userModel')

router.get('/', (req, res) => model.findAll()
    .then(user => {
        res.send(JSON.stringify(user))

    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
    }))

module.exports = router;