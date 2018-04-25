import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Survey from './components/survey';
import TrainingPartnerCard from './components/pathway-visualization/training_partner_card'
import TrainingPartnerCluster from './components/pathway-visualization/training_partner_cluster'
import TrainingPartnerLayout from './components/pathway-visualization/training_partner_layout'
import Header from "./containers/Header"

//dummy data that was previously a local variable
import json from './dummyData.js'

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

  renderSurvey() {
    return (
      <div className = "body_container">
      <Survey onChange={fields => this.onChange(fields)} onSubmit={e => this.onSubmit(e)} />
      </div>
    );
  }

  //add when we need it:
  //      <p>{JSON.stringify(this.state.fields, null, 2)}</p>
        //<p>{JSON.stringify(this.state.finishedSurvey, null, 2)}</p>

  renderPathways(pathway) {
      return (
        <div className = "body_container">
        <TrainingPartnerLayout pathway={pathway} />
        </div>
      );

  }

  render() {


    var pathway = {
      beginner: [json.schools[0], json.schools[4]],
      intermediate: [json.schools[1]],
      advanced: [json.schools[3], json.schools[2]]
    }

        if(this.state.finishedSurvey == "no") {
          return this.renderSurvey();
        } else {
          return this.renderPathways(pathway);
        }

  }
}

export default App;
