const userModel = require("../models/userModel");
const cloudinary = require("../helper/cludinaryHelper");
const userModelTow = require("../models/userModelTow");
class userClass {
  registration = async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "user-images",
      });

      const newUser = new userModel({
        avatar: result.secure_url,
      });

      await newUser.save();
      res
        .status(201)
        .json({ message: "User registered successfully", data: newUser });
    } catch (error) {
      console.error("Error during user registration:", error);  
      res.status(500).json({ message: "Error in registration" });
    }
  };
  registrationTower = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      // if (!req.files || req.files.length !== 0) {
      //   return res.status(400).json({ message: "Please upload image" });
      // }
      let imageUrls = [];
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "tower-images",
        });
        imageUrls.push(result.secure_url);
        console.log(imageUrls)
      }


      const newUser = new userModelTow({
        name,
        email,
        password,
        avatar1: imageUrls[0],
        avatar2: imageUrls[1],
        avatar3: imageUrls[2],
        avatar4: imageUrls[3],
        avatar5: imageUrls[4],
      });
      await newUser.save();
      res
        .status(201)
        .json({ message: "User registered successfully", newUser });
    } catch (error) {
      console.error("Error during user registration:", error);
      res.status(500).json({ error: "Failed to register user" });
    }
  };
  allImage = async (req, res) => {
    try {
      let data = await userModel.find();
      if(data.length===0) return res.status(404).json({
        status:"fail",
        msg : "Img not found"
      });
      res.status(200).json({
        status:"success",
        data
      });
    } catch (error) {
      return res.status(500).json({
        status:"fail",
        msg : `${error.toString()}`
      })
    }
  };
}

const userController = new userClass();
module.exports = userController;
