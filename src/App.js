import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Survey from './components/survey';
import TrainingPartnerLayout from './components/pathway-visualization/training_partner_layout'
import Header from "./containers/header"

import Details from './components/details/Detailed_List'
import WelcomePage from "./components/welcome"

import * as firebase from 'firebase';

//dummy data that were previously local variables
//import schoolData from './newSchoolData.js'
//import pathway from "./pathwayData.js"

class App extends Component {

  constructor() {
    super();
    this.state = {
      speed: 10,
      fields: {},
      page: "welcome",
      detailPartner: null,
      schools: {},
      pathways:{}
    };
  }

  componentDidMount() {
    const schoolsRef = firebase.database().ref("schools");
    const pathwaysRef = firebase.database().ref("pathways");

    schoolsRef.on("value", snapshot => {
      let items = snapshot.val();
      const schools = {};
      for( let item in items) {
        const school = {
          contact : items[item].contact,
          cost : items[item].cost,
          imgPath: items[item].imgPath,
          location: items[item].location,
          website : items[item].website
        };
        schools[item] = school;
      }
      this.setState({ schools: schools});
    });

    pathwaysRef.on("value", snapshot => {
      let items = snapshot.val();
      const pathways = {};
      for( let item in items) {
        const pathway = {
          beginner: items[item].beginner,
          intermediate: items[item].intermediate,
          advanced: items[item].advanced
        };
        pathways[item] = pathway;
      }
      this.setState({ pathways: pathways});
    });
  }

  onChange = updatedValue => {
    this.setState({fields: {
      ...this.state.fields,
      ...updatedValue
    }
  });
  }

  onSubmit = e => {
    this.setState({page: "pathway"});
  }

  onStart = e => {
    this.setState({page: "survey"});
  }

  onPartnerSelect = (partner) => {
    this.setState({page: "detail", detailPartner: partner})
  }

  onBack = e => {
    const predecessors = {
      "welcome": "welcome",
      "survey": "welcome",
      "pathway": "survey",
      "detail": "pathway"
    }
    this.setState({ page: predecessors[this.state.page] })
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

  renderPathways(pathway, schools) {
      return (
        <div className = "body_container">
        <TrainingPartnerLayout pathway={pathway} schoolData={schools} onPartnerSelect={this.onPartnerSelect}/>
        </div>
      );
  }

  renderPartnerDetail(partner, schools) {
    if (!partner) {
      return <div>Loading partner</div>
    }

    return (
      <Details schoolName={partner} schoolData={schools} />
    );
  }

  renderWelcome() {
    return(
      <WelcomePage onStart={e => this.onStart(e)} />
    )
  }

  render() {
    let body;
    if (this.state.page == "welcome") {
      body = this.renderWelcome();
    } else if (this.state.page == "survey") {
      body = this.renderSurvey();
    } else if (this.state.page == "pathway") {
      body = this.renderPathways(this.state.pathways[this.state.fields.interest], this.state.schools);
    } else if (this.state.page == "detail") {
      body = this.renderPartnerDetail(this.state.detailPartner, this.state.schools)
    }

    return(
      <div className="App">
        <Header onBack={this.onBack} page={this.state.page} name={this.state.fields["name"]} />
        <br />
        <div className = "body_container">
          {body}
        </div>
      </div>
    )
  }
}

export default App;
