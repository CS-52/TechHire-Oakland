import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


const styles = {
  gridcont: {
    paddingTop: "1.5em",
    paddingBottom: "1.5em",
  }
};


function CategoryLabels(props) {
  const {classes} = props;

  return (
    <Grid container justify="space-around" direction="row" alignItems="center" spacing={16} className={classes.gridcont}>
      <Grid item key={0}>
        <Typography className={classes.label} variant="headline" gutterBottom>
          Beginner
        </Typography>
      </Grid>
      <Grid item key={1}>
        <Typography className={classes.label} variant="headline" gutterBottom>
          Intermediate
        </Typography>
      </Grid>
      <Grid item key={2}>
        <Typography className={classes.label} variant="headline" gutterBottom>
          Advanced
        </Typography>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(CategoryLabels)
