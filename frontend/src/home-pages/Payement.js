import React,{useEffect, useState} from 'react'
import {   
    Paper,
    makeStyles,
    Container,
    Box,
    Grid,
    TextField,
    Typography,
    Button, 
    } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { savePayement } from '../actions/panierActions';
import CheckOutStep from '../components/CheckOutStep';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './style.css';


  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 250,
    },
   
    buttonStyle: {
        backgroundColor: "#632ce4",
        color: "#fff",
        "&:hover":{
            backgroundColor: "#15171c",
        }
    },
   
      textPrimary:{
  
        color: 'blue',
        textDecoration:'none',
  
       '&:hover':{
           color: '#ff6600'
       }
  
    }
  }));

const Payement = (props) => {
   
    const classes = useStyles();
    const [payementMethode,setPayementMethode] = useState('');
    const [value, setValue] = useState('');

 
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1] : '/';


    const handleChange = (event) => {
          setValue(event.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(savePayement({payementMethode}));
        props.history.push("commande")
    }

    return (
        
        <>
           <Box
            mt={2}
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3
              }}
           >
               <Container  maxWidth="sm">
                     <Grid  container spacing={1}>
                    <div>
                        <CheckOutStep step1 step2 step3 ></CheckOutStep>

                               
                                    <form onSubmit={handleSubmit}>
                                    <Box mb={3}>
                                        <Typography
                                            color="textPrimary"
                                            variant="h4"
                                        >
                                          Payement
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            gutterBottom
                                            variant="body2"
                                        >
                                        
                                        </Typography>
                                        
                                        </Box>
                                    
                                        <Grid
                                            container
                                            spacing={3}
                                        >
                                            <input 
                                                type="radio" 
                                                name="payemantMethode"
                                                value="paypal"
                                                
                                                onChange={(e)=>{setPayementMethode(e.target.value)}}
                                            
                                            />
                                    
                                                {/*<Grid item lg={12} md={12} xs={12} >

                                                   <FormControl component="fieldset">
                                                        <FormLabel component="legend">Méthodes de Payement</FormLabel>
                                                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                            <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                                                            <FormControlLabel value="visa" control={<Radio />} label="Visa" />
                                                            <FormControlLabel value="orangeMoney" control={<Radio />} label="Orange Money" />
                                                        </RadioGroup>
                                                    </FormControl>

                                                </Grid>*/}
                                        </Grid>
                                    
                                        <Box my={2}>
                                        <Button
                                            className={classes.buttonStyle}
                                          
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                        >
                                            Continuer
                                        </Button>
                                        </Box>
                                    
                                    
                                    </form>
                                   
                      
                    </div>
                       
                    </Grid>
               </Container>
           </Box> 
        </>
    )
}

export default Payement
 