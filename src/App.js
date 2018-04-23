import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css'
import Survey from './components/survey';

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
      </div>
    );
  }
}

export default App;
