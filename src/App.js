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
    return (
      <div className="App">
        <Survey onChange={fields => this.onChange(fields)} onSubmit={e => this.onSubmit(e)}/>
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
        <p>{JSON.stringify(this.state.finishedSurvey, null, 2)}</p>
      </div>
    );
  }
}

export default App;
