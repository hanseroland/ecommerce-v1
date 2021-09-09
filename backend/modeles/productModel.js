import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    rating: { type: Number, default: 0 },
    commentaire: { type: String, required: true },
  },
  { 
    timestamps: true, 
  }      
);
const produitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prix: { type: Number, default: 0, required: true },
  image: { type: String, required: true },
  marque: { type: String, required: true },
  categorie: { type: String, required: true },
  quantite: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
  reviews: [reviewSchema],
});

const produitModel = mongoose.model('Produit', produitSchema);

export default produitModel;

/*import mongoose from 'mongoose';


const commentaireSchema = new mongoose.Schema(
    {
      nom: { type: String, required: false },
      note: { type: Number, default: 0 },
      commentaire: { type: String, required: false },
    },
    {
      timestamps: true,
    }
  );

const productSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    image: { type: String, required: true },
    marque: { type: String, required: true },
    prix: { type: Number, default: 0, required: true }, 
    categorie: { type: String, required: true },
    quantite: { type: Number, default: 0, required: true },
    genre:{ type: String, required: true },
    type:{ type: String, required: true },
    description: { type: String, required: true },
    avis: { type: Number, default: 0, required: false },
    numCommentaires: { type: Number, default: 0, required: false },
    commentaires: [commentaireSchema],
  });

const productModel = mongoose.model('Product', productSchema);

export default productModel;*/