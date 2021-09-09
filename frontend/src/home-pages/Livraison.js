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
import { saveLivraison } from '../actions/panierActions';
import CheckOutStep from '../components/CheckOutStep';
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

const Livraison = (props) => {
   
    const classes = useStyles();
    const [adresse, setAdresse] = useState('');
    const [ville,setVille] = useState('');
    const [codePostal, setCodePostal] = useState('');
    const [contact, setContact] = useState('');
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1] : '/';

   


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveLivraison({adresse, ville, codePostal, contact}));
        props.history.push("payement")
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
                        <CheckOutStep step1 step2 >   </CheckOutStep>

                                
                                    <form onSubmit={handleSubmit}>
                                    <Box mb={3}>
                                        <Typography
                                            color="textPrimary"
                                            variant="h4"
                                        >
                                    Information de livraison
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
                                    
                                        <Grid item lg={12} md={12} xs={12} >
                                            <TextField
                                               
                                                fullWidth
                                                label="Adresse"
                                                margin="normal"
                                                name="adresse"
                                                onChange={(e)=> {setAdresse(e.target.value)}}
                                                type="text"
                                                value={adresse}
                                                variant="outlined"
                                                //required
                                                />
                                                <TextField
                                                fullWidth
                                                label="Ville"
                                                margin="normal"
                                                name="ville"
                                                onChange={(e)=>{setVille(e.target.value)}}
                                                type="text"
                                                value={ville}
                                                variant="outlined"
                                                //required
                                                />
                                                <TextField
                                                fullWidth
                                                label="Code Postal"
                                                margin="normal"
                                                name="Code Postal"
                                                onChange={(e)=>{setCodePostal(e.target.value)}}
                                                type="text"
                                                value={codePostal}
                                                variant="outlined"
                                                
                                                />
                                                <TextField
                                                fullWidth
                                                label="Contact"
                                                margin="normal"
                                                name="contact"
                                                onChange={(e)=>setContact(e.target.value)}
                                                type="text"
                                                value={contact}
                                                variant="outlined"
                                                //required
                                                />
                                    
                                            
                                            </Grid>
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

export default Livraison
 