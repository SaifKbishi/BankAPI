console.log('Server is running. this is from server index.js');
const cors = require('cors');
const express = require('express');
const path = require("path");
const app = express();

const User = require('./models/user');
const BankAccount = require('./models/bankaccount');
const Transaction = require('./models/transaction');

require('./DB/mongoose');
app.use(express.static('./src/public'));
app.use(cors());
app.use(express.json());
// app.use('/', route);

if (process.env.NODE_ENV === "production") {  
  app.use(express.static(path.join(__dirname, '../build')));
}

app.get("/",  (req, res) =>{
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

//const {displayAllAccounts, addNewAccount, changeAccountStatus, displayOneAccount, updateAccountDetails, deleteOneAcount, AddDeposit, withdrawMoney, updateAccountCredit, transferMoney, } = require("./utils");

app.get('/', async (req, res)=>{
  try{ //res.render('index');
   const users = await User.find({});
   console.log('this is GET /');
   res.send(users);
  }catch(error){console.log('error views', error)}
 })

//transfering money between 2 active accounts
// app.put(`/api/accounts/transfer/:ppID1/:ppID2/:amount`, (req, res)=>{
//  const {ppID1, ppID2, amount} = req.params;
//  console.log(ppID1, ppID2,amount);
//  const transfermoney = transferMoney(ppID1, ppID2,amount);
//  res.status(200).send(transfermoney);
// });

//toggle account status by name
// app.put(`/bank/togglestatus/:name`, (req, res)=>{
//  const {name} = req.params;
//  const {IsActive} = req.body;
//  console.log('put IsActive', IsActive);
//  const toggleAccountStatus = changeAccountStatus(name, IsActive);
//  res.status(200).send(toggleAccountStatus);
// });

//edit account name by name
// app.put(`/bank/edit/:name/:newname`, (req, res)=>{
//  const {name, newname} = req.params;
//  const editAccountStatus = updateAccountDetails(name,newname);
//  res.status(200).send(editAccountStatus);
// });

//delete an account
// app.delete(`/bank/delete/:name`, (req, res)=>{
//  const {name} = req.params;
//  const deleteAccount = deleteOneAcount(name);
//  res.status(200).send(deleteAccount);
// });

//display one account
// app.get(`/bank/displayaccount/name`, (req,res)=>{ 
//  const {name} = req.params;
//  console.log(name)
//  const anAccount = displayOneAccount(name);
//  res.status(200).send(anAccount);
// });

// app.get('/bank/account', async (req, res)=>{
//  const accountToFind = req.body; 
//  // const allAccounts = BankAccount.find({});
//  try{
//   await BankAccount.findOne({ppID: accountToFind});
//   res.status(300).send(accountToFind);
//  }catch(error){console.log('could not find account', error)}
// })

/********************************************** */


//withdraw money from an account
// app.put(`/bank/withdraw/`, async (req, res)=>{
//  const ppid = req.params.fromaccount;
//  const amountToWithdraw = req.params.amount;
//  const opType = req.body.optype;
//  const trn_number = req.body.tran_number; 
//  try{
//   const updatedAccount = await BankAccount.findOneAndUpdate({ppID : ppid},{$inc:{cash: -amountToWithdraw}},{new: true},(err, doc)=>{
//    if(err){console.log('somehting went wrong updating', err)}
//    // console.log('doc',doc)
//   });  
//   res.status(200).send(updatedAccount);
//  }catch(error){console.log('error withdraw', error)}

//  // try {
//  //  console.log('78 withdraw')
//  //  const updateTransaction = new Transaction({fromaccount: ppid}, {optype: opType}, {optype: opType},{amoun: amountToWithdraw});
//  //  await updateTransaction.save();
//  //  res.status(200).send(updateTransaction);
//  // } catch (error) {console.log('error updating transactions,  withdraw', error)}
// });

//add deposit to account
// app.put(`/bank/deposit/`, async (req, res)=>{
//  const ppid = req.body.toaccount;
//  const amountToAdd = req.body.amount;
//  const opType = req.body.optype;
//  const trn_number = req.body.tran_number;
//  console.log('81:', ppid, amountToAdd, opType, trn_number);
//  try{
//  const updatedAccount = await BankAccount.findOneAndUpdate({ppID : ppid},{$inc:{cash: amountToAdd}},{new: true},(err, doc)=>{
//   if(err){console.log('somehting went wrong updating', err)}
//   // console.log('doc',doc)
//  });
//  res.status(200).send(updatedAccount);
// }catch(error){console.log('error deposit', error)} 
// // const updateTransaction = new Transaction({toaccount: ppid}, {optype:opType}, {amount: amountToAdd});
// // await updateTransaction.save();  
// });

//set credit to account
// app.put(`/bank/credit/`, async (req, res)=>{
//  console.log('75',req.body, )
//  const ppID = req.body.ppID;
//  const newcredit =req.body.credit;
//  console.log('77',ppID , newcredit)
//  try{
//  const updatedAccount = await BankAccount.findOneAndUpdate({ppID : ppID},{$set:{credit: newcredit}},{new: true},(err, doc)=>{
//   if(err){console.log('somehting went wrong updating', err)}
//   //console.log(doc)
//  });
// }catch(error){console.log('error in credit', error)}
//  res.status(200).send(updatedAccount);
// });

//create new Bank Account
app.post('/bank/newaccount/', async (req, res)=>{
 console.log('req.body',req.body,'this is from Post to create new record');
//  const newAccount = new BankAccount(req.body);
 try{
  const newAccount = new BankAccount(req.body);
  console.log('new account', newAccount)
  await newAccount.save();  
  res.status(201).send(newAccount); 
 }catch(error){
  console.log('could not create new Bank Account');
  res.status(400).send({error});
 }
});

//create new user
app.post('/bank/newuser', async(req, res)=>{
 console.log('new user', req.body);
 try{
  const newUser = new User(req.body);
  console.log(newUser);
  await newUser.save();
  res.status(201).send(newUser);
 }catch(error){
  console.log('cannot create user',error);
  res.status(400).send({error});
 }
});

app.delete('/bank/deleteusers', async(req,res)=>{
  try{
    const deleteAllUsers = await User.deleteMany({});
    res.send(deleteAllUsers);
  }catch(error){console.log('error delating all records: ', error)}
})

//retrieve All Accounts
app.get(`/bank/allaccounts`, async (req, res)=>{
  try{
    const allAccounts = BankAccount.find({});
   let accountMap = {};
   (await allAccounts).forEach((account)=>{
    accountMap[account.ppID] = account;
   });
   //res.render('accounts', {users:usersMap}).status(200).send(accountMap);
   res.status(200).send(accountMap);
  }catch(err){console.log('err: ', err)} 
});

// retrive all users
app.get('/bank/allusers', async(req, res)=>{
 try{
  const allUsers = User.find({});
  let usersMap = {};
  (await allUsers).forEach((user)=>{
   usersMap[user._id] = user;
  });
  res.status(200).send(usersMap);
 }catch(err){console.log('err: ', err)} 
});

const PORT = process.env.PORT || 3014;
app.listen(PORT, ()=>{console.log(`Server is listening to port ${PORT}`)});
