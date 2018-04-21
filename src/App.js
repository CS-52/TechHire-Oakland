import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrainingPartnerCard from './components/pathway-visualization/training_partner_card'
import TrainingPartnerCluster from './components/pathway-visualization/training_partner_cluster'
import TrainingPartnerLayout from './components/pathway-visualization/training_partner_layout'

class App extends Component {
      

  render() {

    var json = {
      schools: [
        {
          key: 1,
          name: 'The Hidden Genius Project',
          imgPath: '/images/hidden-genius.png',
          info: {
            targetSkills: ['Mobile Development', 'SQL'],
            location: 'Berkeley',
            website: 'hidden-genius-test.com',
            contact: 'hidden-genius-contact-test@example.com'
          }
        },
        {
          key: 2,
          name: 'Techtonica',
          imgPath: '/images/techtonica.png',
          info: {
            targetSkills: ['Web Development'],
            location: 'San Francisco',
            website: 'techtonica-test.com',
            contact: 'techtonica-contact-test@example.com'
          }
        },
        {
          key: 3,
          name: 'Rithm School',
          imgPath: '/images/rithm-school.jpg',
          info: {
            targetSkills: ['Web Development', 'Ruby'],
            location: 'San Francisco',
            website: 'rithm-test.com',
            contact: 'rithm-contact-test@example.com'
          }
        }
      ]  
    }

    return (
      <div className="App">
        <TrainingPartnerLayout />
      </div>
    );
  }
}

export default App;
