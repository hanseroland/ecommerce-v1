import React, { useEffect } from 'react';
import {Box, Container, Divider, Grid, Typography} from '@material-ui/core'
import { addToCart, removeFromPanier } from '../actions/panierActions';
import { useDispatch,useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import GradientBtn from '../components/GradientBtn'
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
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



const Panier = (props) => {

    const classes = useStyles();
    const panier = useSelector(state => state.panier);
    const { panierItems } = panier;

    const produitId = props.match.params.id;
    const qte = props.location.searh ? Number (props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch()
    const removeFromPanierHanlder = (produitId) => {
        dispatch(removeFromPanier(produitId))
    }
    useEffect(() => {
        if(produitId){
            dispatch(addToCart(produitId,qte))
        }
       
    }, []);

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=livraison");
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
               <Container  maxWidth={false}>
                        <Grid container spacing={2}>
                                 <Grid  item  lg={8} sm={8} xl={12} xs={12}>
                                       
                                            <Box justifyContent="space-between"  display="flex">
                                                <Typography variant="h5"> Panier </Typography>
                                                <Typography variant="h6" component="h6"> Prix </Typography>
                                              
                                            </Box>
                                            <Divider/>
                                            {
                                                panierItems.length === 0 ? 
                                                <Box>
                                                    <Typography variant="h5" >Panier vide</Typography>
                                                </Box>
                                                :
                                                panierItems.map((item,index) => (
                                                <Box  
                                                    style={{borderBottom:'1px solid #c9c9c9'}}
                                                    justifyContent="space-between"  
                                                    display="flex"
                                                    p={1}
                                                >
                                                 <Box display="flex" >
                                                     <Box>
                                                         <img style={{maxWidth:'100px',height:'110px'}} src={(`../images/articles/${item.image}`)} alt="produit" />
                                                     </Box>

                                                    <Box p={3} justifyContent="space-between">
                                                        <Box>
                                                           <Link to={"/produit/" + item.produit} >
                                                                {item.nom}
                                                           </Link>
                                                        </Box>
                                                        <Box>
                                                            Quantite:
                                                            <select value={item.qte} onChange={(e) => dispatch(addToCart(item.produit, e.target.value))}>
                                                            {[...Array(item.quantite).keys()].map(x =>
                                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                            )}
                                                            </select>
                                                            <button 
                                                                onClick={() => removeFromPanierHanlder(item.produit)}
                                                                style={{
                                                                        marginLeft:'5px', 
                                                                        width:"50px",
                                                                        backgroundColor:'red', 
                                                                        color:'#fff' ,
                                                                        border: "1px solid #000",
                                                                        borderRadius:'2px',
                                                                        cursor:'pointer'
                                                                }}>
                                                                Effacer
                                                            </button>
                                                        </Box>
                                                    </Box>    
                                                                                                
                                                 </Box>
                                                  <Box>
                                                      <Typography>{item.prix} XAF</Typography>    
                                                  </Box>
                                                
                                                </Box>  

                                                ))
                                            }
                                       
                                 </Grid>
                                 <Grid  item  lg={4} sm={4} xl={12} xs={12}>
                                       <Card className={classes.root}>
                                             <CardContent>      
                                                 <Typography>
                                                     Total({panierItems.reduce((a,c) => a + c.qte, 0 )} élément(s)) 
                                                     :
                                                     ({panierItems.reduce((a,c) => a + c.prix * c.qte, 0 )}) XAF
                                                 </Typography>        
                                                    
                                                 <GradientBtn onclick={checkoutHandler} nom="Payer" disabled={panierItems.length===0} />               
                                             </CardContent>
                                        </Card>
                                 </Grid>
                        </Grid>
               </Container>

           </Box>
        </>
    );
};





export default Panier;
