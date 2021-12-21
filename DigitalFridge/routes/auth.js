const express = require("express");
const router = express.Router();
const auth = require("../config/auth");
const authController = require('../controllers/authControllers');
const boardController = require('../controllers/boardControllers');

router.post("/register", authController.registerNewUser);
router.post("/login", authController.loginUser);
router.get("/me", auth, authController.getUserDetails);
router.post("/board", boardController.getBoard);

module.exports = router;