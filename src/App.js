import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrainingPartnerCard from './components/pathway-visualization/training_partner_card'
import TrainingPartnerCluster from './components/pathway-visualization/training_partner_cluster'
import TrainingPartnerLayout from './components/pathway-visualization/training_partner_layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TrainingPartnerLayout />
      </div>
    );
  }
}

export default App;
