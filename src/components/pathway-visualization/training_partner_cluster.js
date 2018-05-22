import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TrainingPartnerCard from './training_partner_card'

const styles = theme => ({
  
});

class TrainingPartnerCluster extends React.Component {

  render() {
    const { classes, schools, onPartnerSelect } = this.props
    const spacing = '16'

    return (
      <Grid item xs={12}>
          <Grid container className={classes.demo}
            justify="center"
            direction="column"
            spacing={Number(spacing)}>
            {schools.map(school => (
              <Grid key={school.key} item>
                <TrainingPartnerCard partner={school} onSelect={onPartnerSelect}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
    );
  }
}


export default withStyles(styles)(TrainingPartnerCluster);
