import React, { useState } from 'react';
import axios from 'axios';

const NewAccount =()=>{   
 const [ppID, setPPID] = useState('');
 const [cash, setCash] = useState('');
 const [credit, setCredit] = useState('');

 const createAccount = async ()=>{
   console.log('creating account')
  const newaccount = {
   "ppID": ppID,
   "cash": cash,
   "credit": credit
  }
  try{
    console.log('newaccount', newaccount)
   const accountToCreate = await axios.post('/bank/newaccount', newaccount);
   console.log(accountToCreate);
  //  await accountToCreate.save();
  }catch(error){console.log('not able to create new account', error)}
 }
 const randomAccountNumber = Math.floor(100000 + Math.random() * 9000000)
   
 return (  
  <div className="newAccount">
    <h4>Create new Bank Account</h4>
    <input id='ppID' placeholder='ppID' onChange={(e)=>setPPID(e.target.value)}  value={randomAccountNumber} />
    <input id='cash' placeholder='cash' onChange={(e)=>setCash(e.target.value)} value={cash} />
    <input id='credit' placeholder='credit' onChange={(e)=>setCredit(e.target.value)} value={credit} />

    <button onClick={createAccount}>Create Bank Account</button>
  </div>);
}

export default NewAccount