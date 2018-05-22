import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TrainingPartnerCluster from './training_partner_cluster'
import Arrow from './arrow'
import './styles.css'

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
  layoutdiv: {
    width: '100%',
  }
});


class TrainingPartnerLayout extends React.Component {

  render() {
    const { classes, pathway, onPartnerSelect } = this.props
    const spacing = '16'

    return (
      <div className={classes.layoutdiv}>
        <Arrow />
        <Grid container className={classes.demo}
          justify="space-around"
          direction="row"
          alignItems="center"
          spacing={Number(spacing)}>
            <Grid item key={1}>
              <TrainingPartnerCluster schools={pathway.beginner} onPartnerSelect={onPartnerSelect}/>
            </Grid>
            <Grid item key={2}>
              <TrainingPartnerCluster schools={pathway.intermediate} onPartnerSelect={onPartnerSelect}/>
            </Grid>
            <Grid item key={3}>
              <TrainingPartnerCluster schools={pathway.advanced} onPartnerSelect={onPartnerSelect}/>
            </Grid>
          </Grid>
        </div>
    );
  }
}


export default withStyles(styles)(TrainingPartnerLayout);
