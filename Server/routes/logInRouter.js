const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/Login_donor", authController.loginDonor, authController.createToken);
router.post("/Login_charity", authController.loginCharity, authController.createToken);
router.post("/Login_admin", authController.loginAdmin, authController.createToken);


module.exports = router;