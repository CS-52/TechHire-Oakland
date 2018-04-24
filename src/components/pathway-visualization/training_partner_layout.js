import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TrainingPartnerCluster from './training_partner_cluster'

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


class TrainingPartnerLayout extends React.Component {

  render() {
    const { classes, pathway } = this.props
    const spacing = '16'

    return (
      <Grid item xs={12}>
          <Grid container className={classes.demo}
            justify="space-around"
            direction="row"
            alignItems="center"
            spacing={Number(spacing)}>
            <Grid key={1} item>
              <TrainingPartnerCluster schools={pathway.beginner}/>
            </Grid>
            <Grid key={2} item>
              <TrainingPartnerCluster schools={pathway.intermediate}/>
            </Grid>
            <Grid key={3} item>
              <TrainingPartnerCluster schools={pathway.advanced}/>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}


export default withStyles(styles)(TrainingPartnerLayout);