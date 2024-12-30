const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userRegisterSchema');
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { name,email,mobile, password } = req.body;

    const existedUser = await userModel.findOne({$or:[{email}, {mobile}]})

    if(existedUser){
      return res.status(400).json({alert:true, msg:'Entered Details Already Exists'})
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ name,email,mobile, password: hashedPassword });
    await newUser.save();

    res.status(201).json({alert:true, msg:'User Registered Successfully'});

  } catch (error) {
    console.error("Registration Error:", error); 
    res.status(500).json({error_message_reg :'Error registering user'});
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // console.log(username,password)
    const user = await userModel.findOne({$or:[{email:username},{mobile:username}]});

    if (!user){
      return res.status(400).json({alert:true, msg:'Invalid username'});
    } 

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch){
      return res.status(400).json({alert:true, msg:'Invalid password'});
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({alert:true,msg:'Login Successfully', token });
  } 
  catch (error) {
    res.status(500).json({alert:true, msg:'Error logging in'});
  }
});

module.exports = router;
