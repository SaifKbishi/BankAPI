import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios' 

function App() {
  const [val, setVal] = useState();
  const  func = async()=>{
    const data =  await axios.get('http://localhost:3014/bank/allusers')
    console.log(data.data)

  }
  return (
    <div className="App">
      <button onClick={func}>fetch</button>
    </div>
  );
}

export default App;
