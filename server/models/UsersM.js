const { default: mongoose } = require('mongoose')
const mangoose = require('mongoose')

const UserSchema = new mangoose.Schema({
    name: String,
    email: String,
    age: Number
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel