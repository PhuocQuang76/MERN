import * as actionTypes from "../actionTypes";
import axios from 'axios';

export const AddProductToStore = (product) => {
    return{
        type : actionTypes.ADD_PRODUCT, //actiontype to be matched in user reducer
        payload : product //payload which will update the user state
    }
}

export const GetProducts = (products) => {
    return {
        type : actionTypes.GET_PRODUCTS, 
        payload: products,
    }
}


//server call
//to save user to mongo db and do sign-in or sign up
export const AddProductToDB = (product)=>{
    return (dispatch)=>{
        axios.post("http://localhost:9000/product/add",//uri or end point of singninup api
            product // the user state object we dispatch from the user component
            ).then((response)=>{
                let addedProduct = response.data
                console.log(addedProduct)
                dispatch(AddProductToStore(addedProduct))
            }).catch((err)=>{
                console.log("error while logging in ", err)
        })
    }
}

export const getProducts = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:9000/products/get'); // Replace '/api/products' with the correct endpoint for fetching products
        const products = response.data;
        dispatch({
          type: actionTypes.GET_PRODUCTS,
          payload: products,
        });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  };