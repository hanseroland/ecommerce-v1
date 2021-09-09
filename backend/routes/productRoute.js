import express from 'express'
import Produit from '../modeles/productModel'
import mongoose from 'mongoose'
import { getToken, isAuth ,isAdmin} from '../utils';





const router = express.Router();

router.get("/", async (req,res)=>{ 
  const produits = await Produit.find({});
  res.send(produits);
});     


router.get("/:id", async (req,res)=>{ 
  const produit = await Produit.findOne({_id: req.params.id});
  if(produit){
      res.send(produit);
  }else{
      res.status(404).send({message: "Produit non trouvé"})
  };
});

router.put('/:id', isAuth, isAdmin, async (req, res) => {
  const produitId = req.params.id;
  const produit = await Produit.findById(produitId);
  if (produit) {
    produit.nom = req.body.nom;
    produit.prix = req.body.prix;
    produit.image = req.body.image;
    produit.marque = req.body.marque;
    produit.categorie = req.body.categorie;
    produit.quantite = req.body.quantite;
    produit.description = req.body.description;
    const updatedProduit = await produit.save();
    if (updatedProduit) {
      return res
        .status(200)
        .send({ message: 'Produit mis à jour', data: updatedProduit });
    }
  }
  return res.status(500).send({ message: ' Erreur lors de la mise à jour.' });
});

router.delete('/:id', isAuth, isAdmin, async (req, res) => {
  const deletedProduit = await Produit.findById(req.params.id);
  if (deletedProduit) {
    await deletedProduit.remove();
    res.send({ message: 'Produit supprimé' });
  } else {
    res.send('Erreur lors de la suppression');
  }
});

router.post('/', isAuth, isAdmin, async (req, res) => {
  const produit = new Produit({
    nom: req.body.nom,
    prix: req.body.prix,
    image: req.body.image ,
    marque: req.body.marque,
    categorie: req.body.categorie, 
    quantite: req.body.quantite,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
   const newProduit = await produit.save();
   if(newProduit){
     return res.status(201).send({message: 'Nouveau produit ajouté', data: newProduit});
   }
   return res.status(500).send({message: 'Erreur lors de la création du produit'});
})

export default router;