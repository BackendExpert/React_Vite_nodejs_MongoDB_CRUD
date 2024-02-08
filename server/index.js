const express = require('express')
const mangoose = require('mongoose')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
//import userModel
const UserModel = require('./models/UsersM')

const app = express()
app.use(cors())
app.use(express.json())

//connect mongodb
mongoose.connect("mongodb://127.0.0.1:27017/crud")

// create APIs

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err = res.json(err))
})

//testing server is runing
app.listen(3001, () => {
    console.log("Server is Running")
})
