const mongoose = require('mongoose');
const validator = require('validator');


const BankAccount = mongoose.model('bankaccount', {
 ppID:{
  type:String,
  required:true  
 },
 cash:{
  type:Number,
  required:true
 },
 credit:{
  type:Number,
  min:0,
 }

});//BankAccount

module.exports = BankAccount;