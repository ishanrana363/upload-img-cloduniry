const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const upload = require("../helper/imgHelper");

router.post("/registration", upload.single("avatar"), userController.registration );
router.post("/registration-user", upload.array("avatars",5), userController.registrationTower);



module.exports = router;