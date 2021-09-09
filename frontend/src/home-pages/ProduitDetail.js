import React,{useEffect, useState} from 'react'
import { Box,Grid, Container } from '@material-ui/core'
import VerticalTabs from '../components/VerticalTabs'
import { Typography } from '@material-ui/core'
import Notations from '../components/Cards/Notations'
import { Divider } from '@material-ui/core'
import Tailles from '../components/Options/Tailles'
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduit } from '../actions/produitActions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import GradientBtn from '../components/GradientBtn'
import ProductImg from '../components/Cards/ProductImg'


const tailles = ()=>([
    { id: '1',  title: 'XL' },
    { id: '2', title: 'S' },
    { id: '3', title: 'M' },
    { id: '4', title: 'L' },
    { id: '5', title: 'XL' },
    { id: '6', title: 'XXL' },
  ]);

  const couleurs = ()=>([
    { id: '1',  title: 'Blanc' },
    { id: '2', title: 'Rouge' },
    { id: '3', title: 'Noire' },
    { id: '4', title: 'Bleu' },
    { id: '5', title: 'Vert' },
    { id: '6', title: 'Jaune' },
    { id: '6', title: 'Rose' },
  ]);

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

const ProduitDetail = (props) => {
    //console.log("id => : ",props)
   // const produit = data.produits.find(x => x._id === props.match.params.id)*
   const classes = useStyles();
   const [qte, setQte] = useState(1)
    const produitDetails = useSelector(state => state.produitDetails);
    const {produit,loading,error} = produitDetails;
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(detailsProduit(props.match.params.id));
        return () => {
                //cleanup
        };
    }, []);

    const handleAjouterAuPanier = () => {
        props.history.push("/panier/" + props.match.params.id + "?qte=" + qte)
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
                     <Grid  container spacing={1}>
                            <Grid  item  lg={12} sm={12} xl={12}   xs={12} >
                            {loading ? (
                                <div>Loading...</div>
                                ) : error ? (
                                <div>{error}</div>
                                ) : (
                             <>
                                    <Grid  container spacing={1}>
                                        <Grid item lg={4} sm={6} xs={12}>
                                              <ProductImg nom={produit.nom}  image={produit.image} />
                                        </Grid>

                                        <Grid item lg={8} sm={6} xs={12}>
                                           <Grid  container spacing={1}>
                                                <Grid item lg={6} sm={6} xs={12}>
                                                        <Box>
                                                            <Box>
                                                                <Typography align="justify" variant="h6" >{produit.nom} </Typography>
                                                                <Typography variant="subtitle2" >Marque:   {produit.marque}</Typography>
                                                                {/*<Notations  note={produit.avis}/>*/}
                                                                <Divider/>
                                                            </Box>  
                                                            <Box>
                                                                <Typography variant="inherit" component="h3" >{produit.prix} XAF</Typography>
                                                            </Box> 
                                                            <Box>
                                                                <Typography variant="inherit"  >Options disponibles</Typography>
                                                                <Box  p={1} > 
                                                                    <Box> <Tailles titre="Tailles" liste={tailles()} /> </Box>
                                                                    <Box> <Tailles titre="Couleurs" liste={couleurs()} /></Box>

                                                                </Box>
                                                                <Divider/>
                                                            </Box> 
                                                            <Box>
                                                            <Typography variant="subtitle2" component="h4" >Détails</Typography>
                                                                 <Typography align="justify" >
                                                                    {produit.description}
                                                                 </Typography>
                                                                <Divider/>
                                                            </Box>  
                                                        </Box>
                                                </Grid>
                                                <Grid item lg={6} sm={6} xs={12}>
                                                    <Box  m={1}> 
                                                    <Card className={classes.root}>
                                                        <CardContent>
                                                            
                                                                    <Typography variant="subtitle1" component="h6" >Prix: {produit.prix} XAF </Typography>
                                                                    <Typography variant="subtitle1" component="h6"> {produit.quantite > 0? "Disponible" : 'Indéfini' } </Typography>
                                                                    <Typography variant="subtitle1" component="h6">
                                                                        Quantité : 
                                                                        <select  value={qte} onChange={(e)=> {setQte(e.target.value)} } >
                                                                           {[...Array(produit.quantite).keys()].map(x =>
                                                                                <option key={x+1} value={x + 1}>{x + 1}</option>
                                                                            )}
                                                                        </select>
                                                                    </Typography>
                                                                    {produit.quantite > 0 ?  <GradientBtn nom="Ajouter au pannier" onclick={handleAjouterAuPanier}  /> 
                                                                     :
                                                                     <Typography variant="subtitle1" component="h6">indisponible </Typography>
                                                                    }
                                                                    
                                                        </CardContent>
                                                        </Card>
                                                    </Box>
                                                </Grid>
                                             </Grid>
                                           
                                        </Grid>

                                </Grid>
                                    </>
                                )}     
                            </Grid>
                    </Grid>
               </Container>
           </Box> 
        </>
    )
}

export default ProduitDetail
 