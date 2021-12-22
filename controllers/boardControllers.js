const User = require("../models/User");

exports.getBoards = async (req, res) => {
    console.log(req.body._id);
    const board = await User.findById({_id: req.body._id}, "boardNames");
    console.log(board);
    res.status(201).json({ board });
}

exports.getBoard = async (req, res) => {
    console.log(req.body._id);
    // const board = await User.find({'.0': 'hello'});
    // , "boards.boardId": ""
    console.log(req.body.userId);
    console.log(req.body.boardId);
    const board = await User.find({"_id": req.body.userId, "boards.boardId": req.body.boardId}, "boards");
    console.log(board);
    res.status(201).json({ board });
}

exports.addText = async (req, res) => {
    const user = await User.findById({_id: req.body.userId});
}



