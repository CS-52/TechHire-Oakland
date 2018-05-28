import React , {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import BackButton from './../BackButton'
import './styles.css';



class Navbar extends Component{
  constructor (props){
    super(props)
    this.state = {currentPage: this.props.page}
  }


  render(){

    return(
      <navbar>
        <div> <h1 className="headerTitle">Pathways</h1></div>
        <div id = "backButton" onClick={e => this.props.onBack(e)}>
          <BackButton/>
        </div>
      </navbar>

    )


  }

}
export default Navbar
