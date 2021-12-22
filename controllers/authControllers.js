const User = require("../models/User");

//This passes on the details of the user to the database
exports.registerNewUser = async (req, res) => {
  try {
    //Checks to see if the email already exists in the db
    let isUser = await User.find({ email: req.body.email });
    console.log(isUser);
    if (isUser.length >= 1) {
      return res.status(409).json({
        message: "email already in use"
      });
    }
    //If not, create a new user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      boardNames: {
        boardId: req.body.boardNames.boardId,
        name: req.body.boardNames.name,
        createDate: req.body.boardNames.createDate,
        updateDate: req.body.boardNames.updateDate,
      },
      boards: [
        {
          boardId: req.body.boardNames.boardId,
          content: [],
        }
      ]
    });
    let data = await user.save();
    const token = await user.generateAuthToken();
    res.status(201).json({ data, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

//This looks for the user in the database
exports.loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    //Try to find the user based on login credentials
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res
        .status(401)
        .json({ error: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

//Gets the users's details back - this gets the entire schema
exports.getUserDetails = async (req, res) => {
  await res.json(req.userData);
};