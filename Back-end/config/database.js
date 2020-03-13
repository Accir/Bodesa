const Sequelize = require('sequelize')
const dotenv = require("dotenv");

dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.DBUSERNAME, process.env.DBPASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

sequelize
    .authenticate()
    .then(() => {
        console.log("Successful connection to DB")
    })
    .catch(err => {
        console.error("Unable to connect to DB", err)
    })

module.exports = sequelize;