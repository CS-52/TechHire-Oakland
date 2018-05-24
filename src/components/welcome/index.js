import React , {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import './styles.css';

class WelcomePage extends Component{
  constructor (props){

    super(props)
  }

  onStart = (e) => {
    e.preventDefault();
    this.props.onStart(this.state)
    console.log(this.state);
  }

  render(){
    return(

      <div>
        <div><h1 className="heading">Welcome to Pathways</h1></div>
        <div><h4 className="subHeading">We are geared towards helping people find their way into the tech industry by building out custom pathways that you can follow</h4></div>
        <Button color="primary" variant="raised" className={this.props.button}  onClick={e => this.onStart(e)}>Start</Button>

      </div>

    )


  }

}
export default WelcomePage
