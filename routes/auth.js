const express = require("express");
const router = express.Router();
const auth = require("../config/auth");
const authController = require('../controllers/authControllers');
const boardController = require('../controllers/boardControllers');

//Controls the api's that get details for the login process
// ../user/register
// ../user/login
router.post("/register", authController.registerNewUser);
router.post("/login", authController.loginUser);
router.get("/me", auth, authController.getUserDetails);

//Controls the api's that get details for the boards
// ../user/boards
// ../user/addtext
router.post("/boards", boardController.getBoards);
router.post("/board", boardController.getBoard);
router.post("/addtext", boardController.addText);

module.exports = router;