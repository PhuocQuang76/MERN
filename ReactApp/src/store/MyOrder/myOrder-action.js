import axios from 'axios';
import { myOrderActions } from './myOrder-slice';

export const getCartByStatus = (myOrderObject) => {
    const { userId, status } = myOrderObject;
    if (!myOrderObject) {
        console.log("myOrderObject is error...");
        return;
    }
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:9000/cart/getByStatus?userId=${userId}&status=${status}`);
            console.log("items: " + response.data);
            // calculatePriceQuantityTotal(response.data);
            const fetchObj = {
                "userId": userId,
                "items": response.data, // Update to use response.data
                "status": status
            };
            dispatch(myOrderActions.fetchMyOrderItems(fetchObj));
        } catch (error) {
            console.error('Error fetching myOrder items from cart:', error);
        }
    };
};

export const updateQuantity = (quantityUpdateObj) => {
    const { userId, productId,updatedQuantity,status } = quantityUpdateObj;

    if (!quantityUpdateObj) {
        console.log("myOrderObject is error...");
        return;
    }
    return async (dispatch) => {
        try {
            // let updateQuantity = {
            //     "userId":userId,
            //     "productId": productId,
            //     "updatedQuantity":updatedQuantity
            // }
            const response = await axios.patch("http://localhost:9000/cart/quantityUpdate",quantityUpdateObj);
            // let getCartObj = {
            //     "userId" : userId,
            //     "status" : status
            // }
            // getCartByStatus(getCartObj);
            let fetchObj = {
                "userId":userId,
                "items":response.data,
                "status": status
            }
            dispatch(myOrderActions.fetchMyOrderItems(fetchObj));
        }catch(err){
            console.error('Error updating  quantity items from cart:', err);
        }
    }

}


export const cancelPendingItemFromCart = (cancelPendingItemObj)=> {
   
    const {userId, productId, status} = cancelPendingItemObj;
    return  async (dispatch) => {
        try{
            const response = await axios.delete(`http://localhost:9000/cart/deleteItem/${userId}/${productId}`);

          
            console.log("items: "+response.data) ;
            // calculatePriceQuantityTotal(response.data);

            const statusItems = response.data.filter((item) => item.status === status);
            let fetchObj = {
                "userId":userId,
                "items":statusItems,
                "status": status
            };
            dispatch(myOrderActions.fetchMyOrderItems(fetchObj));
            
        }
        catch(error){
            console.error('Error reduce item from cart:', error);
        }
    }
}

export const updateStatusToDeliveredOrCancel = (updateObj) => {
   
    return  async (dispatch) => {
        try{
            const response = await axios.patch("http://localhost:9000/cart/updateStatusToDeliveredOrCancel",updateObj);
            let fetchObj = {
                "userId":updateObj.userId,
                "items":response.data,
                "status": updateObj.status
            };
            dispatch(myOrderActions.fetchMyOrderItems(fetchObj));
            // calculatePriceQuantityTotal(response.data);
            //dispatch(cartActions.clearItemsInCart([]));
            
        }
        catch(error){
            console.error('Error reduce item from cart:', error);
        }
    }
}

export const reOrderItemFromCanceled = (reOrderObj) => {
   
    return async (dispatch) => {
        try{
            const response = await axios.patch("http://localhost:9000/cart/reOrder",reOrderObj);
            
            let fetchObj = {
                "userId":reOrderObj.userId,
                "items":response.data,
                "status": reOrderObj.status
            };
            dispatch(myOrderActions.fetchMyOrderItems(fetchObj));
        }
        catch(error){
            console.error('Error reOrder item from cart:', error);
        }
    }
}

export const updateModal = (modalObj) => {
    return (dispatch) => {
        dispatch(myOrderActions.updateModal(modalObj));
    }
}