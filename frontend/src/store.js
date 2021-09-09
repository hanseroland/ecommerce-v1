import Cookie from 'js-cookie';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { panierReducer } from './reducers/panierReducers';
import { produitDeleteReducer, produitDetailsReducer, produitListReducer, produitSaveReducer } from './reducers/produitReducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const panierItems = Cookie.getJSON("panierItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;


const initialState = {panier:{panierItems, shipping:{}, payment:{}}, userSignin:{userInfo} };
const reducer = combineReducers({
        produitList: produitListReducer,
        produitDetails: produitDetailsReducer,
        panier: panierReducer,
        userSignin:userSigninReducer,
        userRegister:userRegisterReducer, 
        produitSave: produitSaveReducer,
        produitDelete: produitDeleteReducer
});


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)))
export default store  