const User = require("../models/User");

//This will get the list of boards that a user has created
exports.getBoards = async (req, res) => {
    const board = await User.findById({_id: req.body._id}, "boardNames");
    res.status(201).json({ board });
}

//This will get the content of a single board
exports.getBoard = async (req, res) => {
    const board = await User.find({"_id": req.body.userId, "boards.boardId": req.body.boardId}, "boards");
    console.log(board);
    res.status(201).json({ board });
}

//This will add new content to a board in the db
exports.addText = async (req, res) => {
    const user = await User.findById({_id: req.body.userId});
    //@todo
}



