import React from 'react';
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
    const { classes, schools, onPartnerSelect } = this.props
    console.log(this.state);
    const spacing = '16'

    return (
      <Grid item xs={12}>
          <Grid container className={classes.demo}
            justify="center"
            direction="column"
            spacing={Number(spacing)}>
            {schools.map(school => (
              <Grid key={school} item>
                <TrainingPartnerCard partner={school} onSelect={onPartnerSelect}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
    );
  }
}


export default withStyles(styles)(TrainingPartnerCluster);
