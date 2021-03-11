import axios from 'axios';
import {GET_API, API_LOADING} from '../Actions/types';

export const getApiData = () => dispatch => {
    dispatch(setApiLoading());
    axios.get('http://localhost:5000/apiDataGeo/api',{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
            }
    })
        .then(res =>
            dispatch({
                type: GET_API,
                payload: res.data
            })
        )
};

export const setApiLoading = () =>{
    return{
        type:API_LOADING
    };
};