import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Survey from './components/survey';
import TrainingPartnerLayout from './components/pathway-visualization/training_partner_layout'
import Header from "./containers/header"
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
      page: "survey",
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
      //console.log(snapshot.val());
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
      //console.log(snapshot.val());
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

  renderPathways(pathway, schools) {
      return (
        <div className = "body_container">
        <TrainingPartnerLayout pathway={pathway} schoolData={schools} onPartnerSelect={this.onPartnerSelect}/>
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
        {partner}, {this.state.schools[partner].cost}
      </div>
    );
  }

  render() {
    let body;
    if (this.state.page == "survey") {
      body = this.renderSurvey();
    } else if (this.state.page == "pathway") {
      console.log(this.state.pathways[this.state.fields.interest]);
      body = this.renderPathways(this.state.pathways[this.state.fields.interest], this.state.schools);
    } else if (this.state.page == "detail") {
      body = this.renderPartnerDetail(this.state.detailPartner)
    }

    console.log(this.state);

    return(
      <div className="App">
        <Header />
        {body}
      </div>
    )
  }
}

export default App;
