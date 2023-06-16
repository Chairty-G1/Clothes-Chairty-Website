const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const verifyJWT = require("../middleware/verifyJWT")

router.post("/login", authController.Login, authController.createToken);
router.post("/SignUp_admin", authController.SignUp_admin, authController.createToken);
// router.post("/SignUp_donor", authController.SignUp, authController.createToken);
// router.post("SignUp_charities", authController.SignUp, authController.createToken);


module.exports = router;