import './App.css';
import {useEffect} from 'react';
import axios from 'axios' 
import NewUser from './components/NewUser';
import NewAccount from './components/NewAccount';

function App() {

  useEffect(()=>{
    const fetchData = async ()=>{
      console.log('all users maybe');
      const data = await axios.get('http://localhost:3014/bank/allusers');
      console.log(data.data)
    }
    fetchData(); 
  });

  const allUsers = async()=>{
    try{
    const data =  await axios.get('http://localhost:3014/bank/allusers')
    console.log(data.data);
    }catch(error){console.log('error fetching All Users', error)}    
  }//allUsers

  const allAccount = async()=>{
    try{
    // const data =  await axios.get('http://localhost:3014/bank/allaccounts')
    const data =  await axios.get('/bank/allaccounts')
    console.log(data.data)
    }catch(error){console.log('error fetching All Accounts', error)}    
  }//allAccount

  const deleteAllUsers = async ()=>{
    try{
      const del = await axios.delete('/bank/deleteusers');
      console.log(del)
    }catch(error){console.log(error)}
  }
  
  return (
    document.title = 'BankAPI_FS React',
    <div className="App">
      <button onClick={allUsers}>All Users</button><br/>
      <button onClick={allAccount}>All Accounts</button><br/>
      <button onClick={deleteAllUsers}>Delete Users</button><br/><br/>
      <NewUser/><br/>      
      <NewAccount/>
    </div>
  );
}

export default App;
