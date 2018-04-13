import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import testimage from '../../images/test-image.png';

function CampButton(props) {
  return (
    <div>
      <Button>
        <img src={testimage} alt="Training Partner Icon" height="50" width="50">
        </img>
      </Button>
      Training Partner Name
    </div>
  )
}

export default CampButton
