import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import schoolData from '../../newSchoolData'

const styles = {
  card: {
    maxWidth: 200,
    maxHeight: 320,
    borderRadius: 5,
    cursor: 'pointer'
  },
  media: {
    height: 200,
    width: 200
  }
};

function TrainingPartnerCard(props) {
  const { classes, partner, onSelect } = props;
  return (
    <div>
      <Card className={classes.card} onClick={() => onSelect(partner)}>
        <CardMedia
          className={classes.media}
          image={schoolData.schools[partner].imgPath}
          title="Training Partner"
        />
        <CardContent>
          <Typography gutterBottom variant="title" align="left">
            {partner}
          </Typography>
          <Typography gutterBottom variant="body1" align="left">
            {schoolData.schools[partner].cost}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

TrainingPartnerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrainingPartnerCard);
