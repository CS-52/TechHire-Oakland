import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TrainingPartnerCluster from './training_partner_cluster'
import CategoryLabels from './category_labels'
import './styles.css'

const styles = theme => ({
  layoutdiv: {
    width: '100%',
  },
  toplabels: {
    padding: '90px 90px 90px 90px'
  }
});


class TrainingPartnerLayout extends React.Component {

  render() {
    const { classes, pathway, onPartnerSelect } = this.props
    const spacing = '16'

    return (
      <div className={classes.layoutdiv}>
        <CategoryLabels className={classes.toplabels} />
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
