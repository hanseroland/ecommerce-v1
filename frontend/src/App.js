import React from 'react'
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AppRoutes from './components/AppRoutes';
import Accueil from './home-pages/Accueil';
import Livraison from './home-pages/Livraison';
import CategorieDetail from './home-pages/CategorieDetail';
import DetailLayout from './home-pages/DetailLayout';
import GesProduit from './home-pages/GesProduit';
import HomeLayout from './home-pages/HomeLayout';
import Panier from './home-pages/Panier';
import ProduitDetail from './home-pages/ProduitDetail';
import Signin from './home-pages/Signin';
import Signup from './home-pages/Signup';
import Payement from './home-pages/Payement';
import Commande from './home-pages/Commande';




function App() {

  
  return (
    <>
        <Router>
              <Switch>
                      <AppRoutes   exact={true} path="/"   component={Accueil}  layout={HomeLayout} />
                      <AppRoutes   path="/categorie/:id"   component={CategorieDetail}  layout={HomeLayout} />
                      <AppRoutes   path="/produit/:id"   component={ProduitDetail}  layout={DetailLayout} />
                      <AppRoutes   path="/panier/:id?"   component={Panier}  layout={DetailLayout} />
                      <AppRoutes   path="/livraison"   component={Livraison}  layout={DetailLayout} />
                      <AppRoutes   path="/payement"   component={Payement}  layout={DetailLayout} />
                      <AppRoutes   path="/commande"   component={Commande}  layout={DetailLayout} />
                      <AppRoutes   path="/signin"   component={Signin}  layout={HomeLayout} />
                      <AppRoutes   path="/signup"   component={Signup}  layout={HomeLayout} />
                      <AppRoutes   path="/gestion-produit"   component={GesProduit}  layout={HomeLayout} />
              </Switch>
        </Router>
    </>
  );
}

export default App;
