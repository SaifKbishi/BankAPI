const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('user', {
 name:{
  type: String,
  required: true,
  min: 2
 }, 
 // email:{
 //  type: String,
 //  required: true,
 //  validate(value){
 //   if(!validator.isEmail(value)){
 //    throw new Error('Email address is not valid');
 //   }
 //  }
 // },
 // phone:{
 //  type: String,
 //  required:true,
 //  validate(value){
 //   if (!validator.isMobilePhone(value, "he-IL")) {
 //     throw new Error("phone number most be a valid isrealy phone number");
 //   }
 //  },
 // },
 // address:{
 //  type: String
 // },
});//User

module.exports = User;