import React from 'react';
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

const FormProduit = () => {
    return (
        <>
            

                <form  onSubmit={handleSubmit} >

                         <Grid   container>
                                <Grid item xs={6}>
                                        <input 
                                             type="text"
                                             name="nom"
                                             value={nom}
                                             onChange={(e)=>setName(e.target.value)}
                                        />
                                         <input 
                                             type="text"
                                             name="prix"
                                             value={prix}
                                             onChange={(e)=>setPrix(e.target.value)}
                                        />
                                         <input 
                                             type="text"
                                             name="quantite"
                                             value={quantite}
                                             onChange={(e)=>setQuantite(e.target.value)}
                                        />
                                        
                                </Grid>
                                <Grid item xs={6}>
                                         <input 
                                             type="text"
                                             name="marque"
                                             value={marque}
                                             onChange={(e)=>setMarque(e.target.value)}
                                        />
                                         <input 
                                             type="text"
                                             name="image"
                                             value={image}
                                             onChange={(e)=>setImage(e.target.value)}
                                        />
                                         <input 
                                             type="text"
                                             name="categorie"
                                             value={categorie}
                                             onChange={(e)=>setCategorie(e.target.value)}
                                        />
                                </Grid>
                                <Grid  item xs={12} >
                                        <textarea 
                                            cols="30" 
                                            rows="10"
                                            name="description"
                                            value={description}
                                            id="description"
                                            onChange={(e) => setDescription(e.target.value)}
                                         ></textarea>
                                </Grid>
                         </Grid>

                </form>
        </>
    );
};




export default FormProduit;
