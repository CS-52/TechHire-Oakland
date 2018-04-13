import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button';


import SignIn from "./components/signin_button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <SignIn />
          <Button variant="raised" color="primary">
      Hello World
    </Button>
      </div>
    );
  }
}

export default App;
