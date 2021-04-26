const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('user', {
 name:{
  type: String,
  required: true,
  min: 2
 }, 
 email:{
  type: String,
  required: true,
  validate(value){
   if(!validator.isEmail(value)){
    throw new Error('Email address is not valid');
   }
  }
 },
 phone:{
  type: String,
  required:true,
  validate(value){
   if (!validator.isMobilePhone(value, "he-IL")) {
     throw new Error("Phone number must be a valid Israely phone number");
   }
  },
 },
});//User

module.exports = User;