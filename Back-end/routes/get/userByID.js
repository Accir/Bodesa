const express = require('express')
const router = express.Router()
const db = require("../../config/database")
const User = require('../../models/userModel')

router.get('/', (req, res) => {
    var user_id = req.query.id
    if (user_id !== undefined) {
        User.findOne({
            where: {
                id: user_id
            }
        })
            .then(user => {
                res.send(JSON.stringify(user))
            })
            .catch(err => {
                console.log(err)
                res.sendStatus(500)
            })
    }
    else res.sendStatus(400)
})

module.exports = router;