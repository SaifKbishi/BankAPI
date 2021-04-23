console.log('Server is running. this is from index.js');

const express = require('express');
const app = express();
const PORT = 3015;
app.use(express.json());
require('./DB/mongoose');
const User = require('./models/user');
const BankAccount = require('./models/bankaccount');

const {displayAllAccounts, addNewAccount, changeAccountStatus, displayOneAccount, updateAccountDetails, deleteOneAcount, AddDeposit, withdrawMoney, updateAccountCredit, transferMoney, } = require("./utils");

//transfering money between 2 active accounts
app.put(`/api/accounts/transfer/:ppID1/:ppID2/:amount`, (req, res)=>{
 const {ppID1, ppID2, amount} = req.params;
 console.log(ppID1, ppID2,amount);
 const transfermoney = transferMoney(ppID1, ppID2,amount);
 res.status(200).send(transfermoney);
});

//withdraw money from an account
app.put(`/api/accounts/withdraw/:ppID/:amount`, (req, res)=>{
 const {ppID,amount} = req.params;
 // const {cash,credit} = req.body; 
 console.log(ppID,amount);
 const withdrawmoney = withdrawMoney(ppID, amount);
 res.status(200).send(withdrawmoney);
});

//set credit to account
app.put(`/api/accounts/credit/:ppID`, (req, res)=>{
 const {ppID} = req.params;
 const {credit} =req.body;
 const setCredit = updateAccountCredit(ppID, credit);
 res.status(200).send(setCredit);
});

//add deposit to account
app.put(`/api/accounts/deposit/:ppID`, (req, res)=>{
 const {ppID} = req.params;
 const {cash} =req.body;
 const addcash = AddDeposit(ppID, cash);
 res.status(200).send(addcash);
});

//toggle account status by name
app.put(`/bank/togglestatus/:name`, (req, res)=>{
 const {name} = req.params;
 const {IsActive} = req.body;
 console.log('put IsActive', IsActive);
 const toggleAccountStatus = changeAccountStatus(name, IsActive);
 res.status(200).send(toggleAccountStatus);
});

//edit account name by name
app.put(`/bank/edit/:name/:newname`, (req, res)=>{
 const {name, newname} = req.params;
 const editAccountStatus = updateAccountDetails(name,newname);
 res.status(200).send(editAccountStatus);
});

//delete an account
app.delete(`/bank/delete/:name`, (req, res)=>{
 const {name} = req.params;
 const deleteAccount = deleteOneAcount(name);
 res.status(200).send(deleteAccount);
});

//create new Bank Account
app.post('/bank/newaccount/', async (req, res)=>{
 console.log('req.body',req.body,'this is from Post to create new record');
 const newAccount = new BankAccount(req.body);
 try{  
  console.log('new account', newAccount)
  await newAccount.save();  
  res.status(201).send(newAccount); 
 }catch(error){
  console.log('could not create new Bank Account');
  res.status(400).send({error});
 }
});





//display one account
app.get(`/bank/displayaccount/name`, (req,res)=>{
 console.log('hello')
 const {name} = req.params;
 console.log(name)
 const anAccount = displayOneAccount(name);
 res.status(200).send(anAccount);
});

//retrieve All Accounts
app.get(`/bank/allaccounts`, (req, res)=>{
 const allAccount = displayAllAccounts();
 res.status(200).send(allAccount);
});


app.listen(process.env.PORT || PORT, ()=>{console.log(`Server is listening to port ${PORT}`)});
