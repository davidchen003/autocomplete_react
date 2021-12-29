import './App.css';
import './custom.css';
import React from 'react';
import {useEffect, useState} from 'react';

function App() {

  const [users, setUsers] = useState([])
  const [text, setText] = useState('')
  const [suggestions, setSuggests] = useState([])

  useEffect(() => {
    const data = require('./MOCK_DATA.json');
    setUsers(data)
}, [])

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggests([]);
  }

  const onChangeHandler = (text) => {
    let matches = []
    let searchTerms = text.trim().toLowerCase().split(' ') // separate searching words
    if (text.length > 3) { // no action for input < 4 letter
      matches = users.filter(user => {
        return searchTerms.some(term => user.description.toLowerCase().includes(term))
      })
    }
    setSuggests(matches)
    setText(text)
  }

  const searchAllHandler = (text) => {
    let matches = []
    let searchTerms = text.trim().toLowerCase().split(' ') // separate searching words
    matches = users.filter(user => {
        return searchTerms.every(term => user.description.toLowerCase().includes(term))
      })
    setSuggests(matches)
  }

  return (
    <div className="container"> 
      <div>This is your input: {text}</div>
      <div>
          <button onClick = {() => searchAllHandler(text)}>
            Click for suggestions contain ALL the searching words
          </button>
      </div>
      <input type="text" className = "col-md-12" style= {{marginTop: 10}}
        onChange = {e => onChangeHandler(e.target.value)}
        value = {text}

/*         // take out this function because it requires click the button "Click for suggestions contain ALL the searching words" twice to make it work
        onBlur={() => {
          setTimeout(() => {
            setSuggests([])
          },100);
        }} 
        // so if we click anywhere else, the suggetions will disappear
        // if we only use setSuggests([]), without timeout feature, we won't be even fast enough to pick the suggestion */
        />
      {suggestions && suggestions.map((suggestion,i) => 
        <div key = {i} className="suggestion col-md-12 justify-content-md-center" 
        onClick={() => onSuggestHandler(suggestion.description)}>
          {suggestion.description}
        </div>
      )}
    </div>
  );
}

export default App;
