import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TrainingPartnerCard from './training_partner_card'

const styles = theme => ({

});

class TrainingPartnerCluster extends React.Component {

  render() {
    const { classes, schools, schoolData, onPartnerSelect } = this.props
    const spacing = '24'

    return (
      <Grid container className={classes.demo}
        justify="center"
        direction="column"
        spacing={Number(spacing)}>
        {schools.map(school => (
          <Grid key={school} item>
            <TrainingPartnerCard partner={school} schoolData={schoolData} onSelect={onPartnerSelect}/>
          </Grid>
        ))}
      </Grid>
    );
  }
}


export default withStyles(styles)(TrainingPartnerCluster);
