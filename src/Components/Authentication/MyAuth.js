import { Component } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './MyAuth.css'

class MyAuth extends Component {
    render() {
        return (
          <div className = "AuthWrapper">
            <AmplifySignOut />
          </div>
        );
    }
}

export default withAuthenticator(MyAuth);