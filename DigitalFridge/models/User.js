const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;
const { isEmail } = require('validator');

//Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters']
    },
    register_date: {
        type: Date,
        default: Date.now
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    boards: [
      {
        type: String,
      }
    ]
})

UserSchema.pre("save", async function(next) {
    // Hash the password before saving the user model
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
  });
  
  //this function generates an auth token for the user
  UserSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      "secret"
    );
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
  };
  
  //this method search for a user by email and password.
  UserSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      throw new Error({ error: "Invalid login details" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error({ error: "Invalid login details" });
    }
    return user;
  };

  const User = mongoose.model("User", UserSchema);
  module.exports = User;