import React from 'react';
import './App.css';
import { Auth } from 'aws-amplify'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, world!</h1>
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
      </header>
    </div>
  );
}

export default App;
