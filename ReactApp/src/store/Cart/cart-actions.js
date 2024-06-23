import { uiActions } from '../ui-slice';
import { cartActions } from './cart-slice';
import axios from 'axios';

export const AddItemToCartInDB = (cart) => {
    let totalPrice;
    if (!cart) {
        console.log("Cart is error...")
        return;
    }
    totalPrice = cart.item.price * cart.item.quantity;
    cart.item.status = "Pending",
    cart.item.totalPrice = totalPrice;
    console.log("adding item to cart to DB...");
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:9000/cart/add-item", cart);
            const addedItem = response.data;
            console.log("addedItem:", cart.item);
            console.log("addedIUser:", cart.userId);
            dispatch(cartActions.addItemToCart(cart));
        } catch (err) {
            console.log("error while adding item to cart:", err);
        }
    };
}

export const AddItemToCartInDBByFetch = (cart) => {
    let totalPrice;
    if (!cart) {
        console.log("Cart is error...")
        return;
    }
    totalPrice = cart.item.price * cart.item.quantity;
    cart.item.totalPrice = totalPrice;
    console.log("adding item to cart to DB...");
    return  (dispatch) => {

        window.fetch("http://localhost:9000/cart/add-item",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({userid:userid, cart:cart})
            body: JSON.stringify(cart)
        })
        .then(response => response.json())
        .then(data => {
            console.log("addedItem:", cart.item);
            console.log("addedIUser:", cart.userId);
            dispatch(cartActions.addItemToCart(cart));
        })
        .catch((err)=> {
            // dispatch(setLoading(false));
            console.log("error while adding item to cart:", err);
        })

    };
}



export const GetCardFromDBByUserId = (userId) => {
    console.log("usernamefromGetDB:" + userId);
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:9000/cart/getAll?userId=${userId}`);
            
            const items = await response.data;

            console.log('Items type:', typeof items);
            console.log('Items content:', items);

            if (!Array.isArray(items)) {
                console.error('Items is not an array:', items);
                return;
            }

            const totalQuantity = items.reduce((total, item) => {
                return total + (item.quantity || 0); // Ensure item.quantity is a number
            }, 0);
    
            const fetchObj = {
                "items": items,
                "totalQuantity": totalQuantity
            };
            console.log("totalQuantity:" + totalQuantity);
            
            dispatch(cartActions.fetchCartItems(fetchObj));
            
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
};

export const reduceItemQuantity = (cart) => {
    
    return async (dispatch) => {
        try {
             const response = await axios.patch("http://localhost:9000/cart/reduceItem",cart);
             dispatch(cartActions.updateItemsFromDB(response.data));
            //  calculatePriceQuantityTotal(response.data);
            
        }catch(error){
             console.error('Error reduce item from cart:', error);
        }
    }
}

export const increaseItemQuantity = (cart) => {
    
    return async (dispatch) => {
        try {
             const response = await axios.patch("http://localhost:9000/cart/increaseItem",cart);
             console.log("items: "+response.data) ;
            //  calculatePriceQuantityTotal(response.data);
             dispatch(cartActions.updateItemsFromDB(response.data));
             
        }catch(error){
             console.error('Error reduce item from cart:', error);
        }
    }
}

// export const removeItemInCart = (userId,productCode)=> {
//     return  async (dispatch) => {
//         try{
//             const response = await axios.delete(`http://localhost:9000/cart/deleteItem/${userId}/${productCode}`);
//             console.log("items: "+response.data) ;
//             // calculatePriceQuantityTotal(response.data);
//             dispatch(cartActions.updateItemsFromDB(response.data));
            
//         }
//         catch(error){
//             console.error('Error reduce item from cart:', error);
//         }
//     }
// }

export const removeItemInCart = (userId,productId)=> {
    return  async (dispatch) => {
        try{
            const response = await axios.delete(`http://localhost:9000/cart/deleteItem/${userId}/${productId}`);
            console.log("items: "+response.data) ;
            // calculatePriceQuantityTotal(response.data);
            dispatch(cartActions.updateItemsFromDB(response.data));
            
        }
        catch(error){
            console.error('Error reduce item from cart:', error);
        }
    }
}

export const clearItemsInCart = (userId)=> {
    
    return  async (dispatch) => {
        try{
            const response = await axios.delete(`http://localhost:9000/cart/deleteItems/${userId}`);
            dispatch(cartActions.updateItemsFromDB(response.data));
            // calculatePriceQuantityTotal(response.data);
            //dispatch(cartActions.clearItemsInCart([]));
            
        }
        catch(error){
            console.error('Error reduce item from cart:', error);
        }
    }
}


export const updateTotals = ()=> {
    return (dispatch) => {
        dispatch(cartActions.getTotals());
    }
}





// export const updateTotalCartQuantity = (items)=> {
//     return async (dispatch) => {
//         try{
//             items.reduce()
//         }catch(error){

//         }
//     }
// }
export const calculateTotalPriceAndTotalQuantity = (items) => {
    return (dispatch) => {
        // // Check if items is null or has length 0
        // if (items === null || items.length === 0) {
        //     const payload = {
        //         totalQuantity: 0,
        //         totalPrice: 0
        //     };
        //     dispatch(cartActions.updateTotalQuantityAndPrice(payload));
        //     return;
        // }

        // // Calculate total price and total quantity when items is not empty
        // const totalPrice = items.reduce((total, item) => {
        //     return total + item.totalPrice;
        // }, 0);
        
        // const totalQuantity = items.reduce((total, item) => {
        //     return total + item.quantity;
        // }, 0);

        // const payload = {
        //     totalQuantity: totalQuantity,
        //     totalPrice: totalPrice
        // };

        // dispatch(cartActions.updateTotalQuantityAndPrice(payload));
    };
};

// export var acceptedStatusUpdate = function acceptedStatusUpdate(userId, items) {
//     var url = `http://localhost:9000/cart/acceptedUpdate/${userId}`;
//     alert("UserID:" + userId);
  
//     return function (dispatch) {
//       fetch(url, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(items)
//       })
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (data) {
//           dispatch(cartActions.updateItemsFromDB(data)); // Dispatch an action with the received data
//         })
//         .catch(function (error) {
//           console.error('Error:', error);
//         });
//     };
//   };



//   export const acceptedStatusUpdate = (paymentObject)=> {
//     const {userId, items} = paymentObject;
//     if (!paymentObject) {
//         console.log("paymentObject is error...")
//         return;
//     }
//     return (dispatch) => {
        
//         window.fetch("http://localhost:9000/cart/acceptedUpdate",{
//             method: 'PATCH',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             // body: JSON.stringify({userid:userid, cart:cart})
//             body: JSON.stringify(paymentObject)
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log("data:", data);
            
//             dispatch(cartActions.updateItemsFromDB(data));
//         })
//         .catch((err)=> {
//             // dispatch(setLoading(false));
//             console.log("error while adding item to cart:", err);
//         })
//     }
// }


export const acceptedStatusUpdate = (paymentObject) => {
    
    return async (dispatch) => {
        try {
             const response = await axios.patch("http://localhost:9000/cart/acceptedUpdate",paymentObject);
             console.log("items: "+response.data) ;
            //  calculatePriceQuantityTotal(response.data);
             dispatch(cartActions.updateItemsFromDB(response.data));
             
        }catch(error){
             console.error('Error reduce item from cart:', error);
        }
    }
}