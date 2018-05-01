import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Survey from './components/survey';
import TrainingPartnerLayout from './components/pathway-visualization/training_partner_layout'
import Header from "./containers/header"

//dummy data that were previously local variables
import schoolData from './schoolData.js'
import pathway from "./pathwayData.js"

class App extends Component {

  state = {
    fields: {},
    survey: "yes",
    finishedSurvey: false,
    inDetail: false,
    detailPartner: null
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

  onPartnerSelect = (partner) => {
    this.setState({inDetail: true, detailPartner: partner})
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
        <TrainingPartnerLayout pathway={pathway} onPartnerSelect={this.onPartnerSelect}/>
        </div>
      );

  }

  renderPartnerDetail(partner) {
    console.log(partner)
    if (!partner) {
      return <div>Loading partner</div>
    }

    return (
      <div>
        <p>This will be replaced with the detail component!</p>
        {partner.name}, {partner.info.cost}
      </div>
    );
  }

  render() {



        let body;
        if (!this.state.finishedSurvey) {
          body = this.renderSurvey();
        } else if (!this.state.inDetail) {
          body = this.renderPathways(pathway);
        } else {
          body = this.renderPartnerDetail(this.state.detailPartner)
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
