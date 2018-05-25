import React , {Component} from 'react'
import ReactDom from 'react-dom'
import NavBar from './../../components/navbar'
import './styles.css';

const Header = (props) => {
  const { onBack } = props;
  return(
    <header className="App-header">
      <NavBar onBack={onBack} />
    </header>

  )
};

export default Header;
