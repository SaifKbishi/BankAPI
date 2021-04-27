// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/userController");

// router.get('/bank/allusers', async(req, res)=>{
//  try{
//   const allUsers = User.find({});
//   let usersMap = {};
//   (await allUsers).forEach((user)=>{
//    usersMap[user._id] = user;
//   });
//   res.status(200).send(usersMap);
//  }catch(err){console.log('err: ', err)} 
// });