import React , {Component} from 'react'
import ReactDom from 'react-dom'
import logo from './../../logo.svg';

class Navbar extends Component{

  render(){
    return(
      <navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </navbar>

    )


  }

}
export default Navbar
