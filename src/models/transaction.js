const mongoose = require('mongoose');
const validator = require('validator');

const Transaction = mongoose.model('user', {
 fromAccount:{
  type: String
 },
 ToAccount:{
  type: String
 },
 OpType:{
  type: String,
  required: true
 },
 Amount:{
  type: Number
 }
});//User

module.exports = Transaction;