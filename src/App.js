import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrainingPartnerCard from './components/pathway-visualization/training_partner_icon'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TrainingPartnerCard partnerName='Techtonica' imgPath='/images/techtonica.png'/>
      </div>
    );
  }
}

export default App;
