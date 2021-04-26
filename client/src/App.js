import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios' 

function App() {
  let [{term}, setTerm] = useState({term:'',});
  const [val, setVal] = useState();

  useEffect(()=>{
    const fetchData = async ()=>{
      console.log('all users maybe');
      const data = await axios.get('http://localhost:3014/bank/allusers');
      console.log(data.data)
    }
    fetchData();
  });
  // const userToFind = document.getElementById('name').value;
  // console.log('userToFind: ',userToFind);  

  const  allUsers = async()=>{
    try{
    const data =  await axios.get('http://localhost:3014/bank/allusers')
    console.log(data.data)
    }catch(error){console.log('error fetching All Users', error)}    
  }//allUsers

  const  allAccount = async()=>{
    try{
    const data =  await axios.get('http://localhost:3014/bank/allaccounts')
    console.log(data.data)
    }catch(error){console.log('error fetching All Accounts', error)}    
  }//allAccount

  const findClientByName = async(term)=>{
    console.log('term:', term)
    try{
      const user = await axios.get(`/bank/user/${term}`);
      console.log('1 user:', user.data);      
    }catch(error){console.log('fetch one client', error)}
  }
  const handleChange = (e)=>{
    console.log('change: ', e.target.value);
    console.log({term})
    setTerm({term :  e.target.value});
    // setTerm({term });
   }

  
  return (
    document.title = 'BankAPI_FS React',
    <div className="App">
      <button onClick={allUsers}>All Users</button><br/>
      <button onClick={allAccount}>All Accounts</button><br/>

      {/* <input type="text" id="name" value={term} onChange={(e)=>handleChange(e)} placeholder="name"></input><br/> */}
      <input type="text" id="name" value={term} onChange={(e)=>handleChange(e)} placeholder="name"></input><br/>
      {/* <button onClick={findClientByName}>Find a client</button><br/> */}
      <button onClick={findClientByName}>Find a client</button><br/>
    </div>
  );
}

export default App;
