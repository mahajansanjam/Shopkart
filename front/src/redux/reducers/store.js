import {createStore, combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import { getproductDetailsReducer, getproductsReducer } from './productReducer';
import { cartReducer} from './cartReducers';

const reducer = combineReducers({
    getproducts:getproductsReducer,
    getproductDetails:getproductDetailsReducer,
    cart:cartReducer 
});


const middleware = [thunk];


const store =createStore(
    reducer ,
    composeWithDevTools(applyMiddleware(...middleware))

)
export default store;