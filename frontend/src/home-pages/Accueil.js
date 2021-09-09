import React, { useState,useEffect } from 'react'
import { Box, Container, Grid } from '@material-ui/core';
import PubSection from '../components/PubSection';
import { ListHomme } from '../components/Cards/ListHomme';
import { ListFemme } from '../components/Cards/ListFemme';
import CardPromo from '../components/Cards/CardPromo';
import Img from '../images/articles/glody-kikonga-jEZjOnj6-Co-unsplash.jpg'
import Im from '../images/articles/dom-hill-nimElTcTNyY-unsplash.jpg'
import InfoSection from '../components/InfoSection';
import Categories from '../components/Sections/Categories';
import Slide from '../components/Slide';
import CardGridlist from '../components/Cards/CardGridlist';
import { useDispatch, useSelector } from 'react-redux';
import { listProduits } from '../actions/produitActions';


const Accueil = () => {

const produitList = useSelector(state => state.produitList);
const {produits,loading,error} = produitList;
const dispatch = useDispatch()

console.log(produits)

useEffect(() => {

      dispatch(listProduits());
      return () => {
            //cleanup
      };
}, []);

    return (
        <>
        <Slide/>
        <Box
         mt={2}
         sx={{
             backgroundColor: 'background.default',
             minHeight: '100%',
             py: 3
           }} 
        >
          <Container maxWidth={false}>
               <Grid container spacing={2}>
                       <Grid item lg={3} sm={6} xl={3} xs={12}>
                             <CardGridlist titre="Mode Homme" data={ListHomme} />
                       </Grid>
                       <Grid item lg={3} sm={6} xl={3} xs={12}>
                             <CardPromo titre="Tendance" img={Im} />
                       </Grid>
                       <Grid item lg={3} sm={6} xl={3} xs={12}>
                             <CardGridlist titre="Mode Femme" data={ListFemme} />
                       </Grid>
                       <Grid item lg={3} sm={6} xl={3} xs={12}>
                             <CardPromo titre="Promotion" img={Img} />
                       </Grid>
                      
               </Grid>
               <PubSection
                  lightBg="true"
                  imgStart={true}
                  lightText={true}
                  headLine="Faites vous livrez par Boni Express Service!"
                  img={require('../images/boni-service-08-05-1.png').default}
                  alt="Affiche de livreur"
               />
             {loading ? (
                  <div>Loading...</div>
                  ) : error ? (
                  <div>{error}</div>
                  ) : (
             <>
              <InfoSection  genre="homme" data={produits}  />
               
               <Categories/>
              <InfoSection  genre="femme" data={produits}  /> 
               <PubSection
                  lightBg="true"
                  imgStart={false}
                  lightText={true}
                  headLine="30% de remise pour le nouveau Iphone 12 pour les 100 premiers"
                  img={require('../images/denis-cherkashin-zgUkIMKeJq4-unsplash.jpg').default}
                  alt="Iphone 12"
               />
               </>
                  )} 
              {/* <InfoSection  categorie="Cuisine et intérieur" data={dataMaison}  />*/}
          </Container>
        </Box>
        </>
    )
}

export default Accueil
