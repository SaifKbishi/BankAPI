import React, { useState } from 'react';
import axios from 'axios';

const NewUser =()=>{
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');

 const createUser = async ()=>{
  const newuser = {
   "name": name,
   "email": email,
   "phone": phone
  }
  try{   
   const userToAdd = await axios.post('/bank/newuser', newuser);
   userToAdd.save();
  }catch(error){console.log('not able to create user from NewUser.js', error)}
 }

   
 return (  
  <div className="newUser">
    <h4>Create New User</h4>
    <input id='name' placeholder='name' onChange={(e)=>setName(e.target.value)} value={name} />
    <input id='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)} value={email} />
    <input id='phone' placeholder='phone' onChange={(e)=>setPhone(e.target.value)} value={phone} />

    <button onClick={createUser}>Create User</button>
  </div>);
}

export default NewUser