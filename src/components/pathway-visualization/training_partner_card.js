import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 200,
    maxHeight: 320
  },
  media: {
    height: 200,
    width: 200
  },
};

function TrainingPartnerCard(props) {
  const { classes } = props;
  const partnerName = props.partnerName
  const imgPath = props.imgPath
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image= {imgPath}
          title="Training Partner"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {partnerName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

TrainingPartnerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrainingPartnerCard);
