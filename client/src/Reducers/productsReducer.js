import {GET_PRODUCTS,ADD_PRODUCTS,DELETE_PRODUCTS,EDIT_PRODUCTS,PRODUCTS_LOADING} from '../Actions/types';

const initialState = {
    products: [],
    loading: false
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload,
                loading: false
            }   
        case ADD_PRODUCTS:
            return{
                ...state,
                products: [action.payload, ...state.products]
            } 
        case DELETE_PRODUCTS:
            return{
                ...state,
                products: state.products.filter(products => products._id !== action.payload)
            }
        case EDIT_PRODUCTS:
            return {
                ...state,
                products: [action.payload, ...state.products]
            } 
        case PRODUCTS_LOADING:
            return{
                ...state,
                loading: true
            }      
        default:
            return state;
    }
}