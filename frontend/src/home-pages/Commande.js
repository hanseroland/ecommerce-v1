import React, { useEffect } from 'react';
import {Box, Button, Container, Divider, Grid, Typography} from '@material-ui/core'
import { addToCart, removeFromPanier } from '../actions/panierActions';
import { useDispatch,useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import GradientBtn from '../components/GradientBtn'
import {Link} from 'react-router-dom'
import CheckOutStep from '../components/CheckOutStep';
import SimpleList from '../components/List/SimpleList';


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
  
    },
    listPayement:{
        listStyle:"none"
    }
  }));



const Commande = (props) => {

    const classes = useStyles();
    const panier = useSelector(state => state.panier);
    const { panierItems,shipping,payment } = panier;
    if(!shipping.adresse){
        props.history.push("/livraison");
    }else if(!payment.payementMethode){
        props.history.push("/payement");
    }

    const itemsPrix = panierItems.reduce((a,c) => a + c.prix*c.qte, 0);
    const expPrix = itemsPrix > 100 ?0 : 10;
    const taxePrix = 0.18 * itemsPrix;
    const prixTotal = itemsPrix + taxePrix + taxePrix;


    const dispatch = useDispatch()
  
    const commandeHandler = () => {
        
    }
    useEffect(() => {
       
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
                                <CheckOutStep step1 step2 step3 step4></CheckOutStep>
                                      
                                       <Box justifyContent="space-between"  display="flex">
                                           <SimpleList
                                                titre="Livraison"
                                                adresse={panier.shipping.adresse}
                                                ville={panier.shipping.ville}
                                                codePostal={panier.shipping.codePostal}
                                                contact={panier.shipping.contact}
                                                payement={panier.payment.payementMethode}
                                           />
                                          
                                       </Box>
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
                                                       Quantité:{item.qte}
                                                      
                                                      
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
                                                 <Box p={2}>
                                                 <ul className={classes.listPayement} >
                                                     <li>
                                                         <Button size="small" color="secondary" variant="outlined" onClick={commandeHandler} >Commander</Button>
                                                     </li>
                                                     <li>
                                                         <h4>Details de la commande</h4>
                                                     </li>
                                                     <li>
                                                         <div>Éléments</div>
                                                         <li>{itemsPrix} XOF </li>
                                                     </li>
                                                     <li>
                                                         <div>Expédition</div>
                                                         <li>{expPrix} XOF</li>
                                                     </li>
                                                     <li>
                                                         <div>Taxe</div>
                                                         <li>{taxePrix} XOF </li>
                                                     </li>
                                                     <li>
                                                         <div><Typography variant="h6" color="secondary">Total</Typography></div>
                                                         <li>
                                                            <Typography variant="h6" color="secondary">{prixTotal} XOF </Typography>
                                                         </li>
                                                     </li>
                                                </ul>    
                                                 </Box>
                                                
                                             </CardContent>
                                        </Card>
                                 </Grid>
                          

                             
                        </Grid>
               </Container>

           </Box>
        </>
    );
};





export default Commande;
