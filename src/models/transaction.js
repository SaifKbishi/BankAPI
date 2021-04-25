const mongoose = require('mongoose');
const validator = require('validator');

const Transaction = mongoose.model('transaction', {
 fromaccount:{
  type: String
 },
 toaccount:{
  type: String
 },
 optype:{
  type: String,
  required: true
 },
 amount:{
  type: Number,
  required: true,
  min:1
 }
});//Transaction

module.exports = Transaction; 