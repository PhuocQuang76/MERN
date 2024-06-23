import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [
            {
                // "productCode": "",
                "productId": "",
                "name": "",
                "price": 0,
                "totalPrice": 0,
                "image": "0",
                "desc": "0",
                "rating": "0",
                "quantity": 0,
                "status" :"",
                "date": ""  
            }
        ],
        cartTotalAmount:0,
        cartTotalQuantity:0,
        changed:false
    },
    reducers: {

        fetchCartItems(state, action){
            return{
                ...state, items:action.payload.items, cartTotalQuantity:action.payload.totalQuantity
            }
        },


        addItemToCart(state, action) {
        // const newItem = action.payload;
        // const existingItem = state.items.find((item) => item.productCode === newItem.productCode);

        // if (!existingItem) {
        //   state.items.push({
        //     productCode: newItem.productCode,
        //     price: newItem.price,
        //     quantity: 1,
        //     totalPrice: newItem.price,
        //     name: newItem.name
        //   });
        // } else {
        //   existingItem.quantity++;
        //   existingItem.totalPrice = existingItem.totalPrice + newItem.price;
    
        // }

            console.log("item:"+action.payload.item);
            return{   
                ...state , item:action.payload
            }
        },

        

        updateItemsFromDB(state,action){
            return{
                ...state,
                items:action.payload
            }
        },

        
        reduceItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.cartTotalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },

        updateTotalQuantityAndPrice(state, action) {
            
            const { totalQuantity, totalPrice } = action.payload;

            state.cartTotalQuantity= totalQuantity;
            state.cartTotalAmount=totalPrice;
                
            
        },

        clearItemsInCart(state, action){
            return{
                ...state,
                items : action.payload
            }
        }
        
        // getTotals(state, action) {
        //     let { total, quantity } = state.items.reduce(
        //         (cartTotal, item) => {
        //             const { price, quantity } = item;
        //             const itemTotal = price * quantity;
            
        //             cartTotal.total += itemTotal;
        //             cartTotal.quantity += quantity;
            
        //             return cartTotal;
        //         },
        //         {
        //             total: 0,
        //             quantity: 0,
        //         }
        //     );
        //     total = parseFloat(total.toFixed(2));
        //     state.cartTotalQuantity = quantity;
        //     state.cartTotalAmount = total;
        // },

          
    //   removeItemFromCart(state, action) {
    //     const id = action.payload;
    //     const existingItem = state.items.find(item => item.productCode === productCode);
    //     state.totalQuantity--;
    //     if (existingItem.quantity === 1) {
    //       state.items = state.items.filter(item => item.productCode !== productCode);
    //     } else {
    //       existingItem.quantity--;
    //     }



    },
    
  });
  export const cartActions = cartSlice.actions;
  export default cartSlice.reducer;

