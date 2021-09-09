import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYEMENT, CART_SAVE_SHIPPING } from "../constants/panierConstants";
import Cookie from "js-cookie";


const addToCart = (produitId, qte) => async (dispatch,getState) => {
  try {
    const { data } = await Axios.get("/api/produits/" + produitId);
    dispatch({
      type: CART_ADD_ITEM, payload: {
        produit: data._id,
        titre: data.titre,
        img: data.img,
        prix: data.prix,
        quantite: data.quantite,
        qte
      }
    });
    const { panier: { panierItems } } = getState();
    Cookie.set("panierItems", JSON.stringify(panierItems));
   
  } catch (error) {

  }
}

const removeFromPanier = (produitId) => (dispatch,getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: produitId });
  
  const { panier: { panierItems } } = getState();
  Cookie.set("panierItems", JSON.stringify(panierItems));
}

const saveLivraison = (data) => (dispatch) => {
  dispatch({type: CART_SAVE_SHIPPING, payload: data});
}

const savePayement = (data) => (dispatch) => {
  dispatch({type: CART_SAVE_PAYEMENT, payload: data});
}

/*const saveShipping = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
}
const savePayment = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT, payload: data });
}*/

export { addToCart,removeFromPanier, saveLivraison , savePayement}