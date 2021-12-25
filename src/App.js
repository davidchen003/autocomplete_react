import './App.css';
import './custom.css';
import React from 'react';
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

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggests([]);
  }

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

        onBlur={() => {
          setTimeout(() => {
            setSuggests([])
          },100);
        }} // so if we click anywhere else, the suggetions will disappear
        // if we only use setSuggests([]), without timeout feature, we won't be even fast enough to pick the suggestion
        />
      {suggestions && suggestions.map((suggestion,i) => 
        <div key = {i} className="suggestion col-md-12 justify-content-md-center" 
        onClick={() => onSuggestHandler(suggestion.email)}>
          {suggestion.email}
        </div>
      )}
    </div>
  );
}

export default App;
