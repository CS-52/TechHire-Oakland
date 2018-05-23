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
  const { classes } = props;
  return (
    <div className={classes.root}>

      <List>
        <img src="../images/rithm-school.jpg" width="100"/>
        <ListItem>
          <ListItemText primary="Target Skills" secondary="Web Develpment, Ruby" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Experience Level" secondary="Intermediate" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Time" secondary="Full-time" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Website" secondary="rithm.com" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Contact" secondary="ryan@rithm.com" />
        </ListItem>
      </List>
    </div>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);
