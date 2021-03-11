import axios from 'axios';
import { USER_LOADING} from '../Actions/types';

export const getUser = (user) => dispatch => {
    // dispatch(setUserLoading());
    axios.post('http://localhost:5000/auth/login',user)
        .then((response) => {
            console.log(response.data)
            localStorage.setItem('token', response.data.token);
      })
};


export const setUserLoading = () =>{
    return{
        type:USER_LOADING
    };
};