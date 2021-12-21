const User = require("../models/User");

exports.getUserDetails = async (req, res) => {
    await res.json(req.userData);
}

exports.getBoard = async (req, res) => {
    console.log("Entered?");
    const user = await User.find({ _id: req.params._id});
    console.log(user);
  }