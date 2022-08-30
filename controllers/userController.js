const User = require("../models/userModel")



// login
const loginUser = async (req, res) => {
  res.json({ msg: "login succesfull" });
};

// sign up user

const signupUser = async (req, res) => {
  res.json({ msg: "signup succesfull" });
};

module.exports = {
  signupUser,
  loginUser,
};
