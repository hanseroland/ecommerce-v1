import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import Notations from './Notations';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
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

export default function CardProduct(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  

  return (
    <Card className={classes.root}>
     
      <CardMedia
        className={classes.media}
        image={require(`../../images/articles/${props.image}`).default}
        title={props.nom}
      />
      <CardContent>
       
        <Typography variant="body1" color="textPrimary" component="h2">
            <Link className={classes.productTile}  to={'/produit/' + props._id}>{props.nom}</Link>
        </Typography>
        <Typography variant="body2" color="textPrimary" component="h3">
            {props.marque}
        </Typography>
        <Typography variant="subtitle1" color="textPrimary" component="h5">
           {props.prix} XAF
        </Typography>
        <Notations  note={props.avis} />
      </CardContent>
     
     
    </Card>
  );
}
