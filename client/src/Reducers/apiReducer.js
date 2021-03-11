import {GET_API} from '../Actions/types';

const initialState = {
    apiData: '',
    loading: false
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_API:
            return{
                ...state,
                apiData: action.payload,
                loading: false
            }       
        default:
            return state;
    }
}