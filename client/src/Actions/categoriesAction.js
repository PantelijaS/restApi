import axios from 'axios';
import {GET_CATEGORIES,ADD_CATEGORIES,DELETE_CATEGORIES,EDIT_CATEGORIES,CATEGORYLOAD} from '../Actions/types';

export const getCategories = () => dispatch =>{
    dispatch(setCategoryLoading());
    axios.get('http://localhost:5000/categories',{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
           
        }
    })
    .then(res => 
        dispatch({
        type: GET_CATEGORIES,
        payload: res.data
    })
    )
};

export const addCategories = (categories) => dispatch =>{
  axios.post('http://localhost:5000/categories/add',categories,{
    headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
       
    }
  })
  .then(res => 
    dispatch({
        type: ADD_CATEGORIES,
        payload: res.data
    }))
};

export const deleteCategories = id => dispatch =>{
    axios.delete(`http://localhost:5000/categories/delete/${id}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
           
        }
    })
    .then(res => dispatch({
        type: DELETE_CATEGORIES,
        payload: id
    }))
};

export const editCategories = (categories) => dispatch =>{
    console.log(categories)
    // console.log('http://localhost:5000/categories/update/',categories)
    axios.post('http://localhost:5000/categories/update/',categories,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
           
        }
    })
    .then(res => 
      dispatch({
          type: EDIT_CATEGORIES,
          payload: res.data
      })) 
       .then((response) => {
        console.log(response);
        
    })
    .catch((error) => {
        console.log(error);
    });
  };

export const setCategoryLoading = () =>{
    return{
        type:CATEGORYLOAD
    };
};