import './App.css';
import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {

  const [users, setUsers] = useState([])
  const [text, setText] = useState('')
  useEffect(() => {
  const loadUsers = async() => {
    const response = await axios.get('https://reqres.in/api/users')
    //console.log(response.data)
    setUsers(response.data.data)
  }
  loadUsers();
}, [])

  const onChangeHandler = (text) => {
    setText(text)
  }

  return (
    <div className="container"> 
      <div>This is the text you entered: {text}</div>
      <input type="text" className = "col-md-12" style= {{marginTop: 10}}
        onChange = {e => onChangeHandler(e.target.value)}
        value = {text}
        />
    </div>
  );
}

export default App;
