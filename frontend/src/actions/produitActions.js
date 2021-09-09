import axios from "axios"
import Axios from "axios"
import { 
        PRODUIT_LIST_FAIL,
        PRODUIT_LIST_REQUEST, 
        PRODUIT_LIST_SUCCESS,
        PRODUIT_DETAILS_REQUEST,
        PRODUIT_DETAILS_SUCCESS,
        PRODUIT_DETAILS_FAIL, 
        PRODUIT_SAVE_FAIL,
        PRODUIT_SAVE_SUCCESS,
        PRODUIT_SAVE_REQUEST,
        PRODUIT_DELETE_SUCCESS,
        PRODUIT_DELETE_FAIL,
        PRODUIT_DELETE_REQUEST,
} from "../constants/produitConstants"


const listProduits = () => async(dispatch) => {

    try {

        dispatch({type: PRODUIT_LIST_REQUEST})
        const {data}  = await axios.get("/api/produits")
        dispatch({type: PRODUIT_LIST_SUCCESS,payload: data})
        
    } catch (error) {
        dispatch({type: PRODUIT_LIST_FAIL,payload: error.message})
    }
       
}

const saveProduit = (produit) => async (dispatch,getState) => {  
  try {
    dispatch({ type: PRODUIT_SAVE_REQUEST, payload: produit });
    const {
      userSignin: {userInfo},
    } = getState();
    if(!produit._id){
      const { data } = await Axios.post('/api/produits', produit, {
        headers:{
          'Authorization': 'Bearer ' + userInfo.token,
         },
       });
         
    dispatch({ type: PRODUIT_SAVE_SUCCESS, payload: data});
    }else{
      const { data } = await Axios.put('/api/produits/' + produit._id, produit, {
        headers:{
          'Authorization': 'Bearer ' + userInfo.token,
         },
       });    
    dispatch({ type: PRODUIT_SAVE_SUCCESS, payload: data});
    }
  } catch (error) {
    dispatch({ type: PRODUIT_SAVE_FAIL, payload: error.message });
  }
};

const deleteProduit = (produitId) => async (dispatch,getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    dispatch({ type: PRODUIT_DELETE_REQUEST, payload: produitId });
    const { data } = await axios.delete('/api/produits/' + produitId, {
      headers:{
        Authorization: 'Bearer ' + userInfo.token
      }
    });
    dispatch({ type: PRODUIT_DELETE_SUCCESS, payload: data , success:true});
  } catch (error) {
    dispatch({ type: PRODUIT_DELETE_FAIL, payload: error.message });
  }
};

const detailsProduit = (produitId) => async (dispatch) => {
    try {
      dispatch({ type: PRODUIT_DETAILS_REQUEST, payload: produitId });
      const { data } = await axios.get('/api/produits/' + produitId);
      dispatch({ type: PRODUIT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUIT_DETAILS_FAIL, payload: error.message });
    }
  };



export {
    listProduits,
    detailsProduit,
    saveProduit,
    deleteProduit
}