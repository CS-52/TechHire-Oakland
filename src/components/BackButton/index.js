import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import ArrowBack from '@material-ui/icons/ArrowBack'
import Icon from 'material-ui/Icon';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function BackButton(props) {
  const { classes } = props;
  return (
    <Button className={classes.button} variant="raised" color="primary">
      <ArrowBack className={classes.leftIcon}/>
      Back
    </Button>
  );
}

BackButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackButton);
