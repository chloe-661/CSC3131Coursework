const express = require("express");
const router = express.Router();
const auth = require("../config/auth");
const authController = require('../controllers/authControllers');

router.post("/register", authController.registerNewUser);
router.post("/login", authController.loginUser);
router.get("/me", auth, authController.getUserDetails);

module.exports = router;