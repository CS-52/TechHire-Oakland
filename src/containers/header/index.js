import React , {Component} from 'react'
import ReactDom from 'react-dom'
import NavBar from './../../components/navbar'
import './styles.css';

const Header = (props) => {
  const { onBack, page, name} = props;
  const messages = {
    "welcome": "",
    "survey": "Let's get to know you! Fill out the questions below so that we can generate your personalized pathway.",
    "pathway": "Welcome to your personalized learning pathway, " + props.name + "! Click any school to learn more.",
    "detail": "More questions? Contact the Techhire team at example@place.com"
  }

  console.log({props});
  return(
    <div>
    <header className="App-header">
      <NavBar onBack={onBack} />
    </header>
    <div>{messages[props.page]}</div>
    </div>

  )
};

export default Header;
