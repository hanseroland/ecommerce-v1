import React,{useEffect} from 'react'
import { 
        Box,
        Card, 
        CardContent, 
        CardHeader, 
        Divider, 
        Grid, 
 } from '@material-ui/core'
import { Form, useForm } from '../useForm'
import Controls from '../controls/Controls'


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


 const initialValues = {
    nom:'',
    prix: '',
    image: '',
    marque: '',
    categorie: '',
    quantite: '',
    genre: '',
    type:'',
    description: '',
    avis: '' ,
    numCommentaires: '',
}

const AddProductForm = (props) => {

    const {addOrEdit, recordForEdit} = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('nom' in fieldValues)
            temp.nom = fieldValues.nom ? "" : "Champ requis."
        if ('description' in fieldValues)
            temp.description = fieldValues.description ? "" : "Champ requis."
        if ('quantite' in fieldValues)
            temp.quantite = fieldValues.quantite.length > 2 ? "" : "Minimum de 1 nombre requis."
        if ('prix' in fieldValues)
            temp.prix = fieldValues.prix.length > 5 ? "" : "Minimum de 4 nombre requis."
        if ('referent_recruteur' in fieldValues)
            temp.referent_recruteur = fieldValues.referent_recruteur.length !== 0 ? "" : "Champ requis."
        if ('raison_sociale' in fieldValues)
            temp.raison_sociale = fieldValues.raison_sociale.length !== 0 ? "" : "Champ requis."
        if ('adresse_recruteur' in fieldValues)
            temp.adresse_recruteur = fieldValues.adresse_recruteur.length !== 0 ? "" : "Champ requis."
        if ('url_recruteur' in fieldValues)
            temp.url_recruteur = fieldValues.url_recruteur.length !== 0 ? "" : "Champ requis."
        if ('categorie' in fieldValues)
            temp.categorie = fieldValues.categorie.length !== 0 ? "" : "Champ requis."
        if ('genre' in fieldValues)
            temp.genre = fieldValues.genre.length !== 0 ? "" : "Champ requis."
        if ('type' in fieldValues)
            temp.type = fieldValues.type.length !== 0 ? "" : "Champ requis."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }= useForm(initialValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
          <Card>
              <CardHeader
                  subheader="Vous pouvez éditer vos informations"
                  title="Nouveau produit"
              />
              <Divider/>
              <CardContent>
                  <Grid
                      container
                      spacing={3}
                  >
                      <Grid item md={6} xs={12}>
                              <Controls.Input
                                  name="nom"
                                  label="nom"
                                  value={values.nom}
                                  onChange={handleInputChange}
                                  error={errors.nom}
                                  
                              />
                                <Controls.Input
                                  name="marque"
                                  label="marque"
                                  value={values.marque}
                                  onChange={handleInputChange}
                                  error={errors.marque}
                                  
                              />
                               <Controls.Input
                                  name="prix"
                                  label="prix"
                                  value={values.prix}
                                  onChange={handleInputChange}
                                  error={errors.prix}
                                  
                              />
                              <Controls.Input
                                  name="image"
                                  label="image"
                                  value={values.image}
                                  onChange={handleInputChange}
                                  error={errors.image}
                                  
                              />
                                       
                      </Grid>
                      
                     
                      <Grid item md={6} xs={12}>
                             <Controls.Select
                                  name="categorie"
                                  label="catégorie"
                                  value={values.categorie}
                                  onChange={handleInputChange}
                                  options={getCategorie()}
                                  error={errors.categorie}
                              />
                               
                                
                                <Controls.Select
                                  name="genre"
                                  label="genre"
                                  value={values.genre}
                                  onChange={handleInputChange}
                                  options={getGenre()}
                                  error={errors.genre}
                              />

                            <Controls.Select
                                  name="type"
                                  label="type"
                                  value={values.type}
                                  onChange={handleInputChange}
                                  options={getType()}
                                  error={errors.type}
                              />
                               
                            <Controls.Input
                                  name="numCommentaires"
                                  label="referent_recruteur"
                                  value={values.numCommentaires}
                                  onChange={handleInputChange}
                                  //error={errors.numCommentaires}
                                  
                              />
                             <Controls.Input
                                  name="avis"
                                  label="avis"
                                  value={values.avis}
                                  onChange={handleInputChange}
                                 // error={errors.url_recruteur}
                                  
                              />
                                 
                      </Grid>
                    

                     
                      
                      <Grid item md={12} xs={12}>
                              <Controls.Input
                                  name="description"
                                  label="description"
                                  value={values.description}
                                  onChange={handleInputChange}
                                  error={errors.description}
                                  rows="7"
                                  multiline="multiline"
                                  
                              />
                      </Grid>
                     
                  </Grid>
              </CardContent>
              <Divider />
              <Box
                  display="flex"
                  justifyContent="flex-end"
                  p={2}
              >
                 <Controls.Button
                          type="submit"
                          text="Valider" />
                      <Controls.Button
                          text="Effacer"
                          color="default"
                onClick={resetForm} />
              </Box>
          </Card>
      </Form>
    )
}

export default AddProductForm
