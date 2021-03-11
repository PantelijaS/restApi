import {combineReducers} from 'redux';
import categoriesReducer from './categoriesReducer';
import apiReducer from './apiReducer';
import productsReducer from './productsReducer';

export default combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    apiData:apiReducer
});
