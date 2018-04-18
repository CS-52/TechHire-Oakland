import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./containers/Header"
import AppBar from "material-ui/AppBar"


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <div className = "body_container">
          <p>This is a text</p>
        </div>

      </div>

    );
  }
}

export default App;
