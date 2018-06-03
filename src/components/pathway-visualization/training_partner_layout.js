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
            <h2 className="heading">Beginner</h2>
            <h5 className="subHeading">
              Start your coding journey here, <br /> with classes geared toward beginning coders
            </h5>
              <TrainingPartnerCluster schools={pathway.beginner} schoolData={schoolData} onPartnerSelect={onPartnerSelect}/>
            </Grid>
            <img src="/images/arrow2.png" width="100" height="50" vspace="40" />
            <Grid item key={2}>
            <h2 className="heading">Intermediate</h2>
            <h5 className="subHeading">
              These classes assume that you already <br /> have some experience coding
            </h5>
              <TrainingPartnerCluster schools={pathway.intermediate} schoolData={schoolData} onPartnerSelect={onPartnerSelect}/>
            </Grid>
            <img src="/images/arrow2.png" width="100" height="50" vspace="40" />
            <Grid item key={3}>
            <h2 className="heading">Advanced</h2>
            <h5 className="subHeading">
              Up for a challenge? These more advanced classes <br /> offer ways for the experienced coder <br /> to hone their skills.
            </h5>
              <TrainingPartnerCluster schools={pathway.advanced} schoolData={schoolData} onPartnerSelect={onPartnerSelect}/>
            </Grid>
          </Grid>
        </div>
    );
  }
}


export default withStyles(styles)(TrainingPartnerLayout);
