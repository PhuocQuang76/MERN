import * as actionTypes from "../actionTypes";
import axios from 'axios';

export const AddProductToStore = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: product
    }
}

export const FetchProducts = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        payload: products,
    }
}

export const AddProductToDB = (product) => {
    console.log("adding product...");
    return (dispatch) => {
        axios.post("http://localhost:9000/product/add", product)
            .then((response) => {
                let addedProduct = response.data;
                console.log("addewdProduct:" + addedProduct);
                dispatch(AddProductToStore(addedProduct));
            })
            .catch((err) => {
                console.log("error while logging in ", err);
            });
    };
}

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:9000/product/products/get');
            const products = response.data;
            dispatch(FetchProducts(products));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
};

