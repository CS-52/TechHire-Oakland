import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 200,
    maxHeight: 320,
    borderRadius: 5
  },
  media: {
    height: 200,
    width: 200
  }
};

function TrainingPartnerCard(props) {
  const { classes, partner } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={partner.imgPath}
          title="Training Partner"
        />
        <CardContent>
          <Typography gutterBottom variant="Title" align="left">
            {partner.name}
          </Typography>
          <Typography gutterBottom variant="body1" align="left">
            {partner.info.cost}
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
