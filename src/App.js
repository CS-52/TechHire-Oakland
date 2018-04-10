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
      </div>

    );
  }
}

export default App;
