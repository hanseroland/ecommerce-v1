import { Grid,Box, Typography,makeStyles } from '@material-ui/core';
import React from 'react'
import CardProduct from '../Cards/CardProduct';
import {
    InfoContainer,
    InfoWrapper,

 } from './InfoElements';
 import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
   
   more:{
        alignContent:"center",
        alignItems:'center',
        justifyContent:"center",
        textDecoration:'none',
        color: '#ff6600',
        padding: "10px",

       '&:hover':{
           color: '#ff6600'
       }
  
    },

   moreContent:{
    alignContent:"center",
    alignItems:'center',
    justifyContent:"center",
    }

  }));



const InfoSection = (props, primary, dark, dark2) => {
    const classes = useStyles();
    const {genre, data} = props 
  
    return (
        <>
            <InfoContainer lightBg={true}  > 
                    <InfoWrapper>
                     <Box p={2}  display="flex" justifyContent="space-between"  >
                        <Typography variant="h6" color="textPrimary" component="h5" > {genre} </Typography>
                        <Typography className={classes.moreContent} variant="h6" color="textPrimary" component="h5"  > 
                          <Link  className={classes.more} >
                              {/** data.filter(x => x.genre === genre).map((item,index) */}
                                <span> Voir plus <ArrowForwardIosIcon style={{fontSize:13}}  /> </span>  
                          </Link>
                        </Typography>
                     </Box>
                           <Grid container spacing={3}>
                               {
                                  data.map((item,index) =>(
                                      
                                     <Grid key={index} item lg={2} sm={6} xl={3} xs={12}>
                                    
                                                <CardProduct   {...item}  />
                                      </Grid>
                                      
                                  ))
                               }                           
                           </Grid>                      
                    </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
