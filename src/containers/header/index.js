import React , {Component} from 'react'
import ReactDom from 'react-dom'
import NavBar from './../../components/navbar'
import './styles.css';

const Header = (props) => {
  const { onBack, page, interest, name} = props;
  const interestTerms = {
    "Software Engineering": "software engineering",
    "IT, DevOps, Cybersecurity": "IT, DevOps, and cybersecurity",
    "User Interface and Experience": "user interface and experience",
    "Hardware Engineering": "hardware engineering",
    "Sales and Marketing": "sales and marketing"
  }



  function makeNameText(name) {
    if(name == undefined) {
      return "";
    } else {
      return ", "+ name;
    }
  }

  const messages = {
    "welcome": "",
    "survey": "Let's get to know you! Fill out the questions below so that we can generate your personalized pathway.",
    "pathway": "Welcome to your personalized learning pathway" + makeNameText(props.name) +"! We've selected a variety of schools based on your interest in " + interestTerms[props.interest] + ". Click any school to learn more.",
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
