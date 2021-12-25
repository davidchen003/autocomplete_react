import './App.css';
import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {

  const [users, setUsers] = useState([])
  const [text, setText] = useState('')
  const [suggestions, setSuggests] = useState([])

  useEffect(() => {
  const loadUsers = async() => {
    const response = await axios.get('https://reqres.in/api/users')
    //console.log(response.data)
    setUsers(response.data.data)
  }
  loadUsers();
}, [])

  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = users.filter(user => {
        const regex = new RegExp(`${text}`, "gi") //"gi": case insensitive
        return user.email.match(regex)
      })
    }
    //console.log('matches: ', matches)
    setSuggests(matches)
    setText(text)

  }

  return (
    <div className="container"> 
      <div>This is the text you entered: {text}</div>
      <input type="text" className = "col-md-12" style= {{marginTop: 10}}
        onChange = {e => onChangeHandler(e.target.value)}
        value = {text}
        />
      {suggestions && suggestions.map((suggestion,i) => 
        <div key = {i}>{suggestion.email}</div>
      )}
    </div>
  );
}

export default App;
