import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState('Hello World')
  const [btnText, setBtnText] = useState('點擊我')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input type="text" value={value} />
          <button onClick={() => {
            value === 'Hey~~~' 
            ? setValue('Hello World') 
            : setValue('Hey~~~')
          }}>{btnText}</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
