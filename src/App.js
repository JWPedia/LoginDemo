import React from 'react';
import './App.css';
import { Auth } from 'aws-amplify'

function checkUser() {
  Auth.currentAuthenticatedUser()
  .then(user => console.log({user}))
  .catch(err => console.log(err))
}

function signOut() {
  Auth.signOut()
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Signin Demo</h1>
        <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Sign in with Google</button>
        <button onClick={() => Auth.federatedSignIn({provider: 'LoginWithAmazon'})}>Sign in with Amazon</button>
        <button onClick={checkUser}>Username: {checkUser}</button>
        <button onClick={signOut}>Sign Out</button>
      </header>
    </div>
  );
}

export default App;
