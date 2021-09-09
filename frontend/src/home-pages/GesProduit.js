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
    Select,
    MenuItem,
    } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import './table.css'
import { Link} from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { listProduits, saveProduit,deleteProduit, } from '../actions/produitActions'; 
import { produitSaveReducer } from '../reducers/produitReducers';


export const getCategorie = ()=>([
    { id: '1',  title: 'Nouveautés' },
    { id: '2', title: 'Promotions' },
    { id: '3', title: 'Mode et accessoires' },
    { id: '4', title: 'Friperie' },
    { id: '5', title: 'Informatique' },
    { id: '6', title: 'Cuisine et maison' },
    { id: '7', title: 'High-Tesch' },
    { id: '8', title: 'Sport' },
    { id: '9', title: 'Hygiène et Santé' },
    { id: '10', title: 'Beauté et bien-être' },
    { id: '11', title: 'Bébé' },
]);

export const getGenre = ()=>([
    { id: '1',  title: 'Homme' },
    { id: '2', title: 'Femme' },
    { id: '3',  title: 'Garçon' },
    { id: '4', title: 'Fille' },  
]);

export const getType = ()=>([
    { id: '1',  title: 'Adulte' },
    { id: '2', title: 'Adolescent' },
    { id: '3',  title: 'Enfant' },
    { id: '4', title: 'Nourisson' },  
]);

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 250,
    },
   
    buttonStyle: {
        backgroundColor: "#632ce4",
        color: "#fff",
        width: 200,
        "&:hover":{
            backgroundColor: "#15171c",
        }
    },

    buttonEdit: {
        backgroundColor: "#632ce4",
        color: "#fff",
        width: 100,
        border: 'none',
        borderRadius: 10,
       
        cursor: "pointer"
       
    },
    buttonDelete: {
        backgroundColor: "#e4852c",
        color: "#fff",
        width: 100,
        border: 'none',
        borderRadius: 10,
      
        cursor: "pointer"
    },
    buttonStyleBack: {
        backgroundColor: "#e4852c",
        color: "#fff",
        width: 200,
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

const GesProduit = (props) => {
   
    const classes = useStyles();
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [nom, setNom] = useState('');
    const [prix, setPrix] = useState('');
    const [quantite, setQuantite] = useState('');
    const [categorie, setCategorie] = useState('');
    const [marque, setMarque] = useState('');
    const [description, setDescription] = useState(''); 
    const [image, setImage] = useState('');
    const [rating, setRating] = useState('');
    const [numReviews, setNumReviews] = useState('');
    const [genre, setGenre] = useState('');
    const [type, setType] = useState('');

    const produitList = useSelector(state => state.produitList);
    const {loading,produits, error} = produitList;

    const produitSave = useSelector(state => state.produitSave);
    const {loading: loadingSave,success: successSave, error:errorSave} = produitSave;

    const produitDelete = useSelector(state => state.produitDelete);
    const {loading: loadingDelete,success: successDelete, error:errorDelete} = produitDelete;

    const dispatch = useDispatch();
  

    useEffect(() => { 
        if(successSave){
            setModalVisible(false)
        }
             dispatch(listProduits());
          return () => {
              //
          }
    }, [successSave,successDelete]);

    const openModal = (item) => {
       
            setModalVisible(true);
            setId(item._id);
            setNom(item.nom);
            setPrix(item.prix);
            setDescription(item.description);
            setImage(item.image);
            setMarque(item.marque);
            setCategorie(item.categorie);
            setQuantite(item.quantite);
        
    }

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(saveProduit({
            _id:id,
            nom, prix,image,
            marque,categorie,quantite,
            description
        }))
    }

    const deleteHandler = (item) => {
        dispatch(deleteProduit(item._id));
      };
    return (
        
        <>
           <Box
            mt={2}
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 1
              }}
           >
               <Container  maxWidth="lg">
                     <Grid  container spacing={1}>
                         <Box>       
                                    {loadingSave && <div>Chargement...</div> }
                                    {errorSave && <div>{errorSave}</div> }  
                         </Box>
                               
                        <Grid item lg={12} md={12} xs={12}>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography   variant="h4" >Produit</Typography>
                                    <Button   color="primary"onClick={() => openModal({})} variant="outlined" >Créer un produit</Button>
                                </Box>
                                <Box mb={3} >
                                 {modalVisible &&
                                         <form onSubmit={handleRegister} > 
                                         <Grid
                                             container
                                             spacing={3}
                                         >
                                           
                                             <Grid item lg={6} md={6} xs={6} >
                                                 <TextField
                                                    // error={Boolean(touched.nom && errors.nom)}
                                                     fullWidth
                                                    // helperText={touched.nom && errors.nom}
                                                     label="Nom"
                                                     margin="normal"
                                                     name="nom"
                                                    // onBlur={handleBlur}
                                                     onChange={(e)=>setNom(e.target.value)}
                                                     type="text"
                                                     value={nom}
                                                     variant="outlined"
                                                     required
                                                     />
                                                     <TextField
                                                    // error={Boolean(touched.prix && errors.prix)}
                                                     fullWidth
                                                    // helperText={touched.prix && errors.prix}
                                                     label="Prix"
                                                     margin="normal"
                                                     name="prix"
                                                    // onBlur={handleBlur}
                                                     onChange={(e)=>setPrix(e.target.value)}
                                                     type="text"
                                                     value={prix}
                                                     variant="outlined"
                                                     required
                                                     />
                                                
                                                  <TextField
                                                     fullWidth
                                                     label="Quantité"
                                                     margin="normal"
                                                     name="quantite"
                                                     onChange={(e)=>setQuantite(e.target.value)}
                                                     type="text"
                                                     value={quantite}
                                                     variant="outlined"
                                                     //required
                                                     />
                                                     
                                                  {/*  <Select
                                                    // error={Boolean(touched.genre && errors.genre)}
                                                     fullWidth
                                                    // helperText={touched.genre && errors.genre}
                                                     name="genre"
                                                     disableUnderline
                                                     variant="outlined"
                                                     fullWidth
                                                     className={classes.selectStyle}
                                                     //value={values.genre}
                                                    // onBlur={handleBlur}
                                                     onChange={(e)=>setGenre(e.target.value)}
                                                     >
                                                      {
                                                         getGenre().map(
                                                           item => (
                                                                     <MenuItem key={item.id} value={item.title.toLocaleLowerCase()}>
                                                                         {item.title}
                                                                     </MenuItem>
                                                                 )
                                                         ) 
                                                      }
                                                     </Select>*/}
                                             </Grid>
                                             <Grid item lg={6} md={6} xs={6} >
                                                     
                                                     
                                                   {/*  <Select
                                                      //error={Boolean(touched.type && errors.type)}
                                                      fullWidth
                                                      //helperText={touched.type && errors.type}
                                                      name="type"
                                                      disableUnderline
                                                      variant="outlined"
                                                      fullWidth
                                                      className={classes.selectStyle}
                                                      //value={values.type}
                                                      //onBlur={handleBlur}
                                                      onChange={(e)=>setType(e.target.value)}
                                                     >
                                                      {
                                                         getType().map(
                                                           item => (
                                                                     <MenuItem key={item.id} value={item.title.toLocaleLowerCase()}>
                                                                         {item.title}
                                                                     </MenuItem>
                                                                 )
                                                         ) 
                                                      }
                                                     </Select>*/}
                                                    
                                                      <TextField
                                                         fullWidth
                                                         label=""
                                                         margin="normal"
                                                         name="image"
                                                         label="image"
                                                         onChange={(e)=>setImage(e.target.value)}
                                                         type="text"
                                                         value={image}
                                                         variant="outlined"
                                                         required
                                                     />
                                                      <TextField
                                                   
                                                         fullWidth
                                                         
                                                         label="Marque"
                                                         margin="normal"
                                                         name="marque"
                                                     
                                                         onChange={(e)=>setMarque(e.target.value)}
                                                         type="text"
                                                         value={marque}
                                                         variant="outlined"
                                                         required
                                                         />
                                                         <Select
                                                        fullWidth
                                                         name="categorie"
                                                         variant="outlined"
                                                         fullWidth
                                                         className={classes.selectStyle}
                                                         onChange={(e)=>setCategorie(e.target.value)}
                                                         value={categorie}
                                                     >
                                                      {
                                                         getCategorie().map(
                                                           item => (
                                                                    
                                                                     <MenuItem key={item.id} value={item.title.toLocaleLowerCase() || ''}>
                                                                         {item.title}
                                                                     </MenuItem>
                                                                 )
                                                         ) 
                                                      }
                                                     </Select>
                                                     {/*   <TextField
                                                        // error={Boolean(touched.avis && errors.avis)}
                                                         fullWidth
                                                        // helperText={touched.avis && errors.avis}
                                                         label="Avis"
                                                         margin="normal"
                                                         name="rating"
                                                        // onBlur={handleBlur}
                                                         onChange={(e)=>setRating(e.target.value)}
                                                         type="text"
                                                         value={rating}
                                                         variant="outlined"
                                                         //required
                                                     />
                                                      <TextField
                                                         //error={Boolean(touched.numCommentaires && errors.numCommentaires)}
                                                         fullWidth
                                                        // helperText={touched.numCommentaires && errors.numCommentaires}
                                                         label="Nombre de commentaires"
                                                         margin="normal"
                                                         name="numReviews"
                                                        // onBlur={handleBlur}
                                                         onChange={(e)=>setNumReviews(e.target.value)}
                                                         type="text"
                                                         value={numReviews}
                                                         variant="outlined"
                                                         //required
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
                                                     />*/}
                                             
                                                 </Grid>
                                                 <Grid item lg={12} md={12} xs={12}>
                                                 <TextField
                                                         fullWidth
                                                         label="Description"
                                                         margin="normal"
                                                         name="description"
                                                         onChange={(e)=>setDescription(e.target.value)}
                                                         value={description}
                                                         type="text"
                                                         variant="outlined"
                                                         rows="5"
                                                         multiline
                                                         required
                                                     />
                                                 </Grid>
                                             </Grid>
                                         
                                             <Box display="flex" justifyContent="space-between" my={2}>
                                             <Button
                                                 className={classes.buttonStyle}
                                                 //disabled={isSubmitting}
                                                 fullWidth
                                                 size="medium"
                                                 type="submit"
                                                 variant="contained"
                                             >
                                                 {id ? "Modifier":"Ajouter"}
                                             </Button>
                                             <Button
                                                 className={classes.buttonStyleBack}
                                                 //disabled={isSubmitting}
                                                 fullWidth
                                                 size="medium"
                                                 onClick={()=>setModalVisible(false)}
                                                 variant="contained"
                                             >
                                                 retour
                                             </Button>
                                             </Box>
                                         
                                         </form>
                                 }
                            <Box  className="table-container" >
                                <table  classNam="table" >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nom</th>
                                            <th>Prix</th>
                                            <th>Catégorie</th>
                                            <th>Marque</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {produits.map((item,index) => (
                                             <tr key={index}>
                                                     <td >{item._id}</td>
                                                     <td>{item.nom}</td>
                                                     <td>{item.prix}</td>
                                                     <td>{item.categorie}</td>
                                                     <td>{item.marque}</td>
                                                     <td>
                                                         <button className={classes.buttonEdit} onClick={() => openModal(item)}>Editer</button>
                                                          {' '}
                                                         <button className={classes.buttonDelete} onClick={() => deleteHandler(item)} >Supprimer</button>
                                                     </td>
                                             </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Box>
                            </Box>
                        </Grid>
                               
                       
                    </Grid>
               </Container>
           </Box> 
        </>
    )
}

export default GesProduit
 