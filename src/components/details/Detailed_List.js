import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function FolderList(props) {
  const { classes, schoolName, schoolData } = props;
  console.log({schoolName});
  console.log({schoolData});
  const school = schoolData[schoolName];
  return (
    <div className={classes.root}>
      <List>
        <img src={school.imgPath} width="100"/>
        <ListItem>
          <ListItemText primary="Location" secondary={school.location} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Cost" secondary={school.cost} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Website" secondary={school.website} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Contact" secondary={school.contact} />
        </ListItem>
      </List>
    </div>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);
