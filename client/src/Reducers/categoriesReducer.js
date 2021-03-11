import {GET_CATEGORIES,ADD_CATEGORIES,DELETE_CATEGORIES,EDIT_CATEGORIES,CATEGORYLOAD} from '../Actions/types';

const initialState = {
    categories: [],
    loading: false
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload,
                loading: false
            }   
        case ADD_CATEGORIES:
            return{
                ...state,
                categories: [action.payload, ...state.categories]
            } 
        case DELETE_CATEGORIES:
            return{
                ...state,
                categories: state.categories.filter(categories => categories._id !== action.payload)
            }
        case EDIT_CATEGORIES:
            return {
                ...state,
                categories: [action.payload, ...state.categories]
            } 
        case CATEGORYLOAD:
            return{
                ...state,
                loading: true
            }      
        default:
            return state;
    }
}