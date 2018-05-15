import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 150,
    maxHeight: 240,
    borderRadius: 5,
    cursor: 'pointer'
  },
  media: {
    height: 150,
    width: 150,
    backgroundPosition: 'center center',
    backgroundSize: 'contain'
  },
  content: {
    paddingTop: 10,
    //whiteSpace: 'nowrap',
    //overflow: 'hidden',
    //textOverflow: 'ellipsis'
  }
};

function TrainingPartnerCard(props) {
  const { classes, partner, onSelect } = props;
  return (
    <div>
      <Card className={classes.card} onClick={() => onSelect(partner)}>
        <CardMedia
          className={classes.media}
          image={partner.imgPath}
          title="Training Partner"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="title" align="center">
            {partner.name}
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
