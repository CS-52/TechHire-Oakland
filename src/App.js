import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Survey from './components/survey';
import TrainingPartnerCard from './components/pathway-visualization/training_partner_card'
import TrainingPartnerCluster from './components/pathway-visualization/training_partner_cluster'
import TrainingPartnerLayout from './components/pathway-visualization/training_partner_layout'
import Header from "./containers/header"

//dummy data that were previously local variables
import schoolData from './schoolData.js'
import pathway from "./pathwayData.js"

class App extends Component {

  state = {
    fields: {},
    survey: "yes",
    finishedSurvey: false
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
   this.setState({finishedSurvey: true});

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



        let body;
        if(!this.state.finishedSurvey) {
          body = this.renderSurvey();
        } else {
          body = this.renderPathways(pathway);
        }
        return(
          <div className="App">
            <Header/>
            {body}

          </div>

        )


  }
}

export default App;
