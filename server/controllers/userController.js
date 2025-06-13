const User = require("../models/user");
const dotenv = require('dotenv').config(); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {

  const { username , email , password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const existingUser = await User.findOne({username});
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    
    const newUser = new User({
      username,
      email,
      password: hashPassword
    });

    await newUser.save();
    res.status(201).json({ 
      success: true,
      msg: 'User registered successfully', 
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      }
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
}

const userLogin = async (req, res) => {

  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const user = await User.findOne({email});

    const errmsg = "Authenticate User not found / email & password are wrong!";

    if(!user) {
      return res.status(403).json({msg: errmsg });
    }

    const ismatchPassword = await bcrypt.compare(password, user.password);

    if(!ismatchPassword) {
      return res.status(403).json({msg: errmsg });
    }

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email
    };
    
    // console.log("JWT_SECRET in use:", process.env.JWT_SECRET);
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});

    res.status(200).json({ 
      success: true,
      msg: 'Login successfully!',
      token: token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      }
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
}

const getMe = async (req, res) => {

  const userId = req.params.id;

  if(!userId) {
    return res.status(400).json({ msg: "Invalid User ID"});
  }

  try {
    const user = await User.findById(userId).select('-password');

    if(!user) {
      return res.status(404).json({ msg: "User not found"});      
    }

    res.status(200).json({
      success: true,
      msg: "Welcome User",
      user: {
        id:user._id,
        username:user.username,
        email:user.email,
      }
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
}

module.exports = { userRegister , userLogin , getMe };