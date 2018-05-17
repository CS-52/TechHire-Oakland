import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


const styles = {
  label: {
    //padding: 24
  },
  arrowimg: {
    height: 30,
    width: 500,
    objectFit: 'fill'
  }
};


function Arrow(props) {
  const {classes} = props;

  return (
    <Grid container justify="center" direction="row" spacing={24}>
      <Grid item key={0}>
        <Typography className={classes.label} variant="headline" gutterBottom>
          Exposure
        </Typography>
      </Grid>
      <Grid item key={1}>
        <img className={classes.arrowimg} src="/images/arrow-background.png" />
      </Grid>
      <Grid item key={2}>
        <Typography className={classes.label} variant="headline" gutterBottom>
          Employment
        </Typography>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Arrow)
