import { Component } from 'react';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import './MyAuth.css'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifyAuthenticator>
          <AmplifySignIn headerText="Sign In" slot="sign-in"/>
          <AmplifySignUp headerText="Sign Up" slot="sign-up"/>
          <div>
            My App
            <AmplifySignOut />
          </div>
        </AmplifyAuthenticator>
      </header>
    </div>
  );
}

export default App;