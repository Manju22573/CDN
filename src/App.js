import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/logo.png" className="App-logo" alt="logo" />
        <h1>Welcome CDN Caching Demo with React</h1>
        <img src="/images/sample.jpg" alt="Sample" width="500" />
        <p>Last updated: {new Date().toISOString()}</p>
      </header>
    </div>
  );
}

export default App;