import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYEMENT, CART_SAVE_SHIPPING} from "../constants/panierConstants";

function panierReducer(state = { panierItems: [], shipping:{}, payment:{}}, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const produit = state.panierItems.find(x => x.produit === item.produit);
      if (produit) {
        return {
          panierItems:
            state.panierItems.map(x => x.produit === produit.produit ? item : x)
        };
      }
      return { panierItems: [...state.panierItems, item] };
   case CART_REMOVE_ITEM:
      return { panierItems: state.panierItems.filter(x => x.produit !== action.payload) };
   case CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload };
   case CART_SAVE_PAYEMENT:
      return { ...state, payment: action.payload };
    default:
      return state
  }
}

export { panierReducer }