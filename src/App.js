import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrainingPartnerCard from './components/pathway-visualization/training_partner_card'
import TrainingPartnerCluster from './components/pathway-visualization/training_partner_cluster'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TrainingPartnerCluster />
        <TrainingPartnerCard partnerName='Rithm School' imgPath='/images/rithm-school.jpg' />
      </div>
    );
  }
}

export default App;
