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
import { signin } from '../actions/userActions';




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

const Signin = (props) => { 
   
    const classes = useStyles();
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {loading,userInfo, error} = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';

  

    useEffect(() => { 
          if(userInfo){
              props.history.push(redirect);
          }
    }, [userInfo]);

    const handleSignin = (e) => {
        dispatch(signin(e.email,e.password))
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
                        <Formik
                            initialValues={{
                            email: '',
                            password: '',
                            }}
                            validationSchema={
                            Yup.object().shape({
                                email: Yup.string().email('Ajouter un email valide').max(255).required('Email requis'),
                                password: Yup.string().max(255).required('Votre mot de passe est requis'),
                            })
                            }
                            onSubmit={values => handleSignin(values)}
                        >
                            {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            touched,
                            values
                            }) => (
                            <form onSubmit={handleSubmit}>
                            <Box mb={3}>
                                <Typography
                                    color="textPrimary"
                                    variant="h4"
                                >
                                connexion
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Utiliser votre email pour vous connecter
                                </Typography>
                                <Typography>
                                    {loading && <div>Chargement...</div> }
                                    {error && <div>{error}</div> }
                                </Typography>
                                </Box>
                            
                            <Grid
                                container
                                spacing={3}
                            >
                            
                                <Grid item lg={12} md={12} xs={12} >
                                        <TextField
                                        error={Boolean(touched.email && errors.email)}
                                        fullWidth
                                        helperText={touched.email && errors.email}
                                        label="Email"
                                        margin="normal"
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="email"
                                        value={values.email}
                                        variant="outlined"
                                        required
                                        />
                            
                                        <TextField
                                        error={Boolean(touched.password && errors.password)}
                                        fullWidth
                                        helperText={touched.password && errors.password}
                                        label="Mot de passe"
                                        margin="normal"
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="password"
                                        value={values.password}
                                        variant="outlined"
                                        required
                                        />
                                
                                    </Grid>
                                </Grid>
                            
                                <Box my={2}>
                                <Button
                                    className={classes.buttonStyle}
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                >
                                    Se connecter
                                </Button>
                                </Box>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                    >
                                    Vous n'avez pas de compte?
                                    {' '}
                                    <Link
                                       // component={RouterLink}
                                        to={redirect === "/" ? "signup" : "signup?redirect=" + redirect}
                                        variant="h6"
                                        className={classes.textPrimary}
                                    >
                                        S'inscrire
                                    </Link>
                                </Typography>
                            
                            </form>
                            )}
                        </Formik>

                    </Grid>
               </Container>
           </Box> 
        </>
    )
}

export default Signin
 