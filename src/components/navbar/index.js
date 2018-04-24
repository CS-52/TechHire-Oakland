import React , {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';


class Navbar extends Component{
  constructor (props){
    super(props)
    this.state = {currentPage: this.props.page}

  }

  render(){
    return(
      <navbar>
        <ul>
          <li>


          </li>

        </ul>
      </navbar>

    )


  }

}
export default Navbar
