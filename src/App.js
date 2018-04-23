import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Survey from './components/survey';
import TrainingPartnerCard from './components/pathway-visualization/training_partner_card'
import TrainingPartnerCluster from './components/pathway-visualization/training_partner_cluster'
import TrainingPartnerLayout from './components/pathway-visualization/training_partner_layout'

class App extends Component {

  state = {
    fields: {},
    survey: "yes",
    finishedSurvey: "no"
  };


  onChange = updatedValue => {
    this.setState({fields: {
      ...this.state.fields,
      ...updatedValue
    }
  });
  }

  onSubmit = e => {
    console.log(this.state);
   this.setState({finishedSurvey: "yes"});

  }

  render() {

    var json = {
      schools: [
        {
          key: 1,
          name: 'The Hidden Genius Project',
          imgPath: '/images/hidden-genius-project.png',
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
        },
        {
          key: 4,
          name: 'Learners Guild',
          imgPath: '/images/learners-guild.png',
          info: {
            targetSkills: ['Web Development', 'Data Science'],
            location: 'Oakland',
            website: 'learners-guild-test.com',
            contact: 'lg-contact-test@example.com'
          }
        },
        {
          key: 5,
          name: 'Merritt College',
          imgPath: '/images/merritt-college.png',
          info: {
            targetSkills: ['Intro CS', 'Python'],
            location: 'Oakland',
            website: 'merritt-test.com',
            contact: 'merritt-college-contact-test@example.com'
          }
        }
      ]  
    }

    var pathway = {
      beginner: [json.schools[0], json.schools[4]],
      intermediate: [json.schools[1]],
      advanced: [json.schools[3], json.schools[2]]
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className = "body_container">
          <p>This is a text</p>
        </div>
        <Survey onChange={fields => this.onChange(fields)} onSubmit={e => this.onSubmit(e)}/>
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
        <p>{JSON.stringify(this.state.finishedSurvey, null, 2)}</p>
        <TrainingPartnerLayout pathway={pathway}/>
      </div>
    );
  }
}

export default App;
