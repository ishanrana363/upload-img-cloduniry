const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar1: {
    type: String, // Cloudinary URL for the first image
    required: true,
  },
  avatar2: {
    type: String, // Cloudinary URL for the second image
    required: true,
  },
  avatar3: {
    type: String, // Cloudinary URL for the third image
    required: true,
  },
  avatar4: {
    type: String, // Cloudinary URL for the fourth image
    required: true,
  },
  avatar5: {
    type: String, // Cloudinary URL for the fifth image
    required: true,
  },
});

const userModelTow = mongoose.model("usermodeltow", userSchema);

module.exports = userModelTow;
