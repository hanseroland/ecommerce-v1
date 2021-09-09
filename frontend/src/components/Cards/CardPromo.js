import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import { red } from '@material-ui/core/colors';
import { IconButton, Typography } from '@material-ui/core';
import { ArrowRightOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    maxHeight:500,
  },
  media: {
    height: 360,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardPromo(props) {
  const classes = useStyles();
 const {titre, img} = props
 
  return (
    <Card className={classes.root}>
      <CardHeader
      action={
        <IconButton aria-label="settings" style={{backgroundColor:"#fbf000"}}>
          <ArrowRightOutlined  />
        </IconButton>
      }
        title={titre}
      />
     
      <CardMedia
        className={classes.media}
        image={img}
        title={titre}
      />
    </Card>
  );
}
