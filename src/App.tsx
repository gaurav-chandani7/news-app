import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={newsApi}>
          Hit api
        </button>
      </header>
    </div>
  );
}

const newsApi = () => {
  fetch("https://inshortsapi.vercel.app/news?category=national", {
    method: "GET"
  }).then(res => res.json()).then(data=>console.log(data));
}

export default App;
