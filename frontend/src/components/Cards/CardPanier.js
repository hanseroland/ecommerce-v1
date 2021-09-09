import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import Notations from './Notations';
import { Box } from '@material-ui/core';
import GradientBtn from '../GradientBtn';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 200,
    paddingTop: '56.25%', // 16:9
   objectFit:'cover'
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
  productTile:{

      color: 'blue',
      textDecoration:'none',

     '&:hover':{
         color: '#ff6600'
     }

  }
}));

export default function CardPanier(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
        
                <Typography variant="subtitle1" component="h6" >Prix: </Typography>
                <Typography variant="subtitle1" component="h6">Disponibilité: Oui </Typography>
                <Typography variant="subtitle1" component="h6">
                    Quantité : 
                    <select   >
                        <option >1</option>
                        <option >2</option>
                        <option >3</option>
                        <option >4</option>
                        <option >5</option>
                        <option >6</option>
                        <option >8</option>
                        <option >9</option>
                        <option >10</option>
                    </select>
                </Typography>
                <GradientBtn/>
      </CardContent>
    </Card>
  );
}
