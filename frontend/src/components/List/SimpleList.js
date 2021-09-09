import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Box display="flex">
            <Box>
              <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                    <ListItemText primary="Informations d'expédition" />
                    </ListItem>
             </List>
             <Divider />
             <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                <ListItemText primary={props.adresse} />
                </ListItem>
                <ListItemLink href="#simple-list">
                <ListItemText primary={props.ville} />
                </ListItemLink><ListItemLink href="#simple-list">
                <ListItemText primary={props.codePostal} />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                <ListItemText primary={props.contact} />
                </ListItemLink>
            </List>
            </Box>
            <Box>
              <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                    <ListItemText primary="Payement" />
                    </ListItem>
             </List>
             <Divider /> <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                <ListItemText primary={props.payement} />
                </ListItem>

            </List>
            </Box>
       
        </Box>
        
    </div>
  );
}
