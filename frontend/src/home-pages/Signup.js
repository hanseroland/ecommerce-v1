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
import { register } from '../actions/userActions';




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

const Signup = (props) => {
   
    const classes = useStyles();
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const {loading,userInfo, error} = userRegister;
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1] : '/';

   

    useEffect(() => {
          if(userInfo){
              props.history.push(redirect);
          }
    }, [userInfo]);

    const handleRegister = (e) => {

        dispatch(register(e.nom,e.email,e.password));
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
                            nom:'',
                            email: '',
                            password: '',
                            repassword: '',
                            }}
                            validationSchema={
                            Yup.object().shape({
                                nom: Yup.string().max(50).required('Nom requis'),
                                email: Yup.string().email('Ajouter un email valide').max(50).required('Email requis'),
                                password: Yup.string().max(20).required('Votre mot de passe est requis'),
                                repassword: Yup.string().max(20).required('Votre mot de passe est requis'),
                            })
                            }
                            onSubmit={values => handleRegister(values)}
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
                               Creer votre compte
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                   
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
                                        error={Boolean(touched.nom && errors.nom)}
                                        fullWidth
                                        helperText={touched.nom && errors.nom}
                                        label="Nom"
                                        margin="normal"
                                        name="nom"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="text"
                                        value={values.nom}
                                        variant="outlined"
                                        required
                                        />
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

                                        <TextField
                                            error={Boolean(touched.repassword && errors.repassword)}
                                            fullWidth
                                            helperText={touched.repassword && errors.repassword}
                                            label="Saisir à nouveau le Mot de passe"
                                            margin="normal"
                                            name="repassword"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            type="password"
                                            value={values.repassword}
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
                                    S'inscrire
                                </Button>
                                </Box>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                    >
                                    Vous avez déjà un compte?
                                    {' '}
                                    <Link
                                       // component={RouterLink}
                                        to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}
                                        variant="h6"
                                        className={classes.textPrimary}
                                    >
                                        Se connecter
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

export default Signup
 