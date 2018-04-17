import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TrainingPartnerCard from './training_partner_card'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class TrainingPartnerCluster extends React.Component {

  render() {
    const { classes } = this.props
    const spacing = '16'

    return (
      <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <TrainingPartnerCard partnerName='Techtonica' imgPath='/images/techtonica.png' />
              </Grid>
            ))}
          </Grid>
        </Grid>
    );
  }
}


export default withStyles(styles)(TrainingPartnerCluster);
