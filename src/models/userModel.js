const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  avatar: { type: String }, 
},{timestamps:true,versionKey:false});

const User = mongoose.model("User", userSchema);

module.exports = User;
