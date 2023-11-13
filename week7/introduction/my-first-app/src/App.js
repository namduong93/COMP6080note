// Introduction: https://cgi.cse.unsw.edu.au/~cs6080/23T3/content/lectures/react-intro
// React CSS Basic: https://cgi.cse.unsw.edu.au/~cs6080/23T3/content/lectures/react-css-basic
// React LifeCycle: https://cgi.cse.unsw.edu.au/~cs6080/23T3/content/lectures/react-lifecycle

import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

// let globalSecond = 59;


function App() {
  const date = new Date(Date.now());
  let [dropDownVisible, setDropDownVisible] = useState(false);
  let [second, setSecond] = useState(59);
  let [minute, setMinute] = useState(59);
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if (second === 0) {
        setSecond(59);
        setMinute(m => m - 1);
        return;
      }
      // globalSecond--;
      setSecond(s => s - 1);
    }, 50);
    return () => {
      clearInterval(intervalId);
    };
  }, [second]); // The empty dependency array means the effect runs once when the component mounts
  const reset = () => {
    setSecond(59);
    setMinute(59);
  }
  return (
    <div className="App">
      {/* Introduction to React */}
      <header className="App-header">
        {/* Here is the default of the App component */}
        <h1>Hello Work</h1>
        <p>How cool is this</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      {/* React-css-basic */}
      <header className="App-header">
        <div className="App-date">
          {date.toLocaleString()}
        </div>
      </header>
      {/* useState hook */}
      <header className="App-header">
        <button onClick={() => { setDropDownVisible(!dropDownVisible); }}>
          DropDown
        </button>
        {dropDownVisible &&
          <div className="App-dropdown">
            <p>DropDown Content</p>
          </div>
        }
      </header>
      {/* useEffect hook */}
      <header className="App-header">
        <div className="App-date">
          {minute}:{second}
        </div>
        <button onClick={reset}>Reset</button>
      </header>
    </div>
  );
}

export default App;
