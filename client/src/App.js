import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios' 

function App() {
  const [val, setVal] = useState();
  const  allUsers = async()=>{
    try{
    const data =  await axios.get('http://localhost:3014/bank/allusers')
    console.log(data.data)
    }catch(error){console.log('error fetching All Users', error)}    
  }
  const  allAccount = async()=>{
    try{
    const data =  await axios.get('http://localhost:3014/bank/allaccounts')
    console.log(data.data)
    }catch(error){console.log('error fetching All Accounts', error)}    
  }  
  return (
    <div className="App">
      <button onClick={allUsers}>All Users</button>
      <button onClick={allAccount}>All Accounts</button>
    </div>
  );
}

export default App;
