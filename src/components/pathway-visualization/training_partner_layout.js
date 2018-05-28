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
    const { classes, pathway, schoolData, onPartnerSelect } = this.props
    const spacing = '16'

    return (
      <div className={classes.layoutdiv}>
        {/*<CategoryLabels className={classes.toplabels} />*/}
        <Grid container className={classes.demo}
          justify="space-around"
          direction="row"
          alignItems="flex-start"
          spacing={Number(spacing)}>
            <Grid item key={1}>
            <Typography className={classes.label} variant="headline" gutterBottom>
              Beginner
            </Typography>
            <Typography className={classes.label} variant="caption" gutterBottom>
              Start your coding journey here, <br /> with classes geared toward beginning coders
            </Typography>
            <br />
              <TrainingPartnerCluster schools={pathway.beginner} schoolData={schoolData} onPartnerSelect={onPartnerSelect}/>
            </Grid>
            <img src="/images/arrow2.png" width="100" height="50" />
            <Grid item key={2}>
            <Typography className={classes.label} variant="headline" gutterBottom>
              Intermediate
            </Typography>
            <Typography className={classes.label} variant="caption" gutterBottom>
              These classes assume that you already <br /> have some experience coding
            </Typography>
            <br />
              <TrainingPartnerCluster schools={pathway.intermediate} schoolData={schoolData} onPartnerSelect={onPartnerSelect}/>
            </Grid>
            <img src="/images/arrow2.png" width="100" height="50" />
            <Grid item key={3}>
            <Typography className={classes.label} variant="headline" gutterBottom>
              Advanced
            </Typography>
            <Typography className={classes.label} variant="caption" gutterBottom>
              Up for a challenge? These more advanced classes <br /> offer ways for the experienced coder <br /> to hone their skills.
            </Typography>
            <br />
              <TrainingPartnerCluster schools={pathway.advanced} schoolData={schoolData} onPartnerSelect={onPartnerSelect}/>
            </Grid>
          </Grid>
        </div>
    );
  }
}


export default withStyles(styles)(TrainingPartnerLayout);
