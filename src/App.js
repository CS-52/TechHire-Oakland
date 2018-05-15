import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Survey from './components/survey';
import TrainingPartnerLayout from './components/pathway-visualization/training_partner_layout'
import Header from "./containers/header"

//dummy data that were previously local variables
import schoolData from './schoolData.js'
import pathway from "./pathwayData.js"
import WelcomePage from "./components/welcome"

class App extends Component {

  state = {
    fields: {},
    page: "welcome",
    detailPartner: null
  };
/* Need to figure out how to render welcome page and link that survey on start click in the welcome page*/

  onChange = updatedValue => {
    this.setState({fields: {
      ...this.state.fields,
      ...updatedValue
    }
  });
  }

  onSubmit = e => {
    console.log(this.state);
   this.setState({page: "pathway"});

  }

  onPartnerSelect = (partner) => {
    this.setState({page: "detail", detailPartner: partner})
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
  renderWelcome(){
    return(
      <WelcomePage/>
    )
  }

  render() {
    let body;
    if (this.state.page == "welcome") {
      body = this.renderWelcome();
    }
    else if (this.state.page == "survey") {
      body = this.renderSurvey();
    } else if (this.state.page == "pathway") {
      body = this.renderPathways(pathway);
    } else if (this.state.page == "detail") {
      body = this.renderPartnerDetail(this.state.detailPartner)
    }

    return(
      <div className="App">
        <Header />
        <div className = "body_container">
          {body}
        </div>


      </div>
    )
  }
}

export default App;
