const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

const User = require('./models/userModel')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// Default route

app.get('/', (req, res) => {
  res.json({ info: "Node.js, Express and Postgres API" })
})

// User routes

// GET all users
app.use('/get/users', cors(corsOptions), require('./routes/get/users'))
// GET user by id
app.use('/get/user', cors(corsOptions), require('./routes/get/userByID'))
// POST check email and password
app.use('/post/user', cors(corsOptions), require('./routes/post/userLogin'))
// POST register user
app.use('/post/userRegister', cors(corsOptions), require('./routes/post/userRegister'))

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
