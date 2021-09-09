import { 
         PRODUIT_LIST_REQUEST,
         PRODUIT_LIST_SUCCESS,
         PRODUIT_LIST_FAIL,
         PRODUIT_DETAILS_REQUEST,
         PRODUIT_DETAILS_SUCCESS,
         PRODUIT_DETAILS_FAIL, 
         PRODUIT_SAVE_REQUEST, 
         PRODUIT_SAVE_SUCCESS,
         PRODUIT_SAVE_FAIL,
         PRODUIT_DELETE_REQUEST,
         PRODUIT_DELETE_FAIL
} from "../constants/produitConstants";

function produitListReducer(state = { produits: [] }, action) {
    switch (action.type) {
      case PRODUIT_LIST_REQUEST: 
        return { loading: true,produits: [] };
      case PRODUIT_LIST_SUCCESS:
        return { loading: false, success: true, produits: action.payload };
      case PRODUIT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }


  function produitDeleteReducer(state = { produit: {} }, action) {
    switch (action.type) {
      case PRODUIT_DELETE_REQUEST:
        return { loading: true };
      case PRODUIT_DETAILS_SUCCESS:
        return { loading: false, produit: action.payload, success: true };
      case PRODUIT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function produitDetailsReducer(state = { produit: {} }, action) {
    switch (action.type) {
      case PRODUIT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUIT_DETAILS_SUCCESS:
        return { loading: false, produit: action.payload };
      case PRODUIT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
 
  function produitSaveReducer(state = { produit: {} }, action) {
    switch (action.type) {
      case PRODUIT_SAVE_REQUEST:
        return { loading: true };
      case PRODUIT_SAVE_SUCCESS:
        return { loading: false, success: true, produit: action.payload };
      case PRODUIT_SAVE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

export {
    produitListReducer,
    produitDetailsReducer,
    produitSaveReducer,
    produitDeleteReducer
}