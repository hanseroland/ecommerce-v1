import express from 'express'
import {data} from './data'
import config from './config';
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import productRoute from './routes/productRoute'


dotenv.config();

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).catch(error => console.log(error.reason));

const app = express(); 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use("/api/users",userRoute);
app.use("/api/produits",productRoute); 
/*app.get("/api/produits/:id",(req,res) => {
    const produitId = req.params.id;
    const produit = data.produits.find(x => x._id === produitId)
    if(produit)
      res.send(produit)
    else
      res.status(404).send({msg: "Produit non trouvé"})
})*/

app.get("/api/produits",(req,res) => { 
    res.send(data.produits);
})

app.listen(5000, ()=>{console.log("Server start at http://localhost:5000/")})