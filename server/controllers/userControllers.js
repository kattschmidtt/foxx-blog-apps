const User = require('../models/userModel');

const bcrypt = require('bcryptjs');
const HttpError = require("../models/errorModel");

const registerUser = async (req, res, next) => {
  try {
    const {name, email, password, confirmedPassword} = req.body;
    if(!name || !email || !password) {
      return next(new HttpError("Fill in all fields.", 422));
    } 

    const newEmail = email.toLowerCase();

    const emailExists = await User.findOne({email: newEmail})
    if(emailExists) {
      return next(new HttpError("Email already exists", 422));
    }
  
    if((password.trim()).length < 6) {
      return next(new HttpError("Password should be at least 6 characters", 422));
    }

    if(password != confirmedPassword) {
      return next(new HttpError("Passwords do not match", 422));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({name, email: newEmail, password: hashedPassword});
    
    res.status(201).json(`New user ${newUser.email} registered.`);

  } catch (err) {
    return next(new HttpError("User registration failed.", 422));
  }
} 

const loginUser = (req, res, next) => {
  res.json("Login User")
} 

const getUser = (req, res, next) => {
  res.json('Get User Details')
}

const changeAvatar = (req, res, next) => {
  res.json('Change Avatar')
}

const editUser = (req, res, next) => {
  res.json('Edit User Details')
}

module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser}