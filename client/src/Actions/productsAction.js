import axios from 'axios';
import {GET_PRODUCTS,ADD_PRODUCTS,DELETE_PRODUCTS,EDIT_PRODUCTS,PRODUCTS_LOADING} from '../Actions/types';

export const getProducts = () => dispatch =>{
    dispatch(setProductsLoading());
    axios.get('http://localhost:5000/products/',{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
            }
    })
    .then(res => 
        dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    })
    )
};

export const addProducts = (products) => dispatch =>{
    console.log(products)
  axios.post('http://localhost:5000/products/add',products,{
    headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
        }
})
  .then(res => 
    dispatch({
        type: ADD_PRODUCTS,
        payload: res.data
    }))
};

export const deleteProducts = id => dispatch =>{
    axios.delete(`http://localhost:5000/products/delete/${id}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
            }
    })
    .then(res => dispatch({
        type: DELETE_PRODUCTS,
        payload: id
    }))
};

export const editProducts = (id,products) => dispatch =>{
    axios.post(`http://localhost:5000/products/update/${id}`,products,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
            }
    })
    .then(res => 
      dispatch({
          type: EDIT_PRODUCTS,
          payload: res.data
      }))
  };

export const setProductsLoading = () =>{
    return{
        type:PRODUCTS_LOADING
    };
};