import { Component } from 'react';
import './App.css';
import MyAuth from './Components/Authentication/MyAuth';
import Navbar from "./Components/Navbar/Navbar";
import SampleWebApp from "./Components/SampleWebApp/SampleWebApp";

class App extends Component {
  render() {
    return (
      <div className = "App">
      <header className = "App-header">
        <Navbar changer={this.toggleLoginOpenState}/>
      </header>
        <div>
          <MyAuth/>
        </div>
      </div>
    );
  }
}

export default App;
