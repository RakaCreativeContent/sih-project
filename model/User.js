const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  fullname: {
    type: String,
    unique: true,
    required: true,
  },
  contact: {
    type: Number,
    unique: true,
    required: true,
  },
  aadharnum: {
    type: Number,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  },
})
const User = Mongoose.model("sih2", UserSchema)
module.exports = User