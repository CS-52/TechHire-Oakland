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
        <TrainingPartnerCard partnerName='Techtonica' imgPath='/images/techtonica.png'/>
        <TrainingPartnerCard partnerName='Rithm School' imgPath='/images/rithm-school.jpg'/>
      </div>
    );
  }
}

export default App;
