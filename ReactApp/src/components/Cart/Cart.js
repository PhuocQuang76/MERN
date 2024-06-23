// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate} from "react-router-dom";

// import { GetCardFromDBByUserName } from '../../store/Cart/cart-actions.js';

// import {} from "../../store/User/userReducer.js";
// import axios from 'axios';

// import classes from './Cart.module.css';
// import CartItem from './CartItem';

// const Cart = () => {
//   const user = useSelector((store) => store.user.user);
//   console.log("usrNae: " + user.userName);
//   const navigate = useNavigate();
  
 
//   const cart = useSelector((store) => store.cart);
//   const dispatch = useDispatch();
//   debugger;
//   let items = cart.items;
//   console.log("item Check:"+items);

//   const [loadedItems, setLoadedItems] = useState([]);

//   useEffect(() => {
//     // async function fetchItems() {
//     //   try {
//     //     const response = await axios.get(`http://localhost:9000/cart/getAll?userName=${userName}`);
//     //     const items = await response.data;
//     //     setLoadedItems(items);
//     //   } catch (error) {
//     //     console.error('Error fetching items:', error);
//     //   }
//     // }
//     // fetchItems();
    
   
//     items && items.length == 0 ? dispatch(GetCardFromDBByUserName(user.userName)) : []
//   }, []);


//   const checkout = () => {
//      navigate("/checkout");
//   }

//   return (
//     <div className={classes.cart} id="cart-div">
//       <h1>Your Shopping Cart</h1>
//       <br></br>
//       <ul>
//         {items.map((item) => (
//           <CartItem
//             key={item.productCode}
//             item={{
//               productCode: item.productCode,
//               name: item.name,
//               quantity: item.quantity,
//               total: item.totalPrice,
//               price: item.price,
//             }}
//           />
          
//         ))}
//       </ul>
//       <div>
//          <h5>Total Quantity {}</h5>
//       </div>
//       <button className={classes.checkout} onClick={checkout}>CheckOut</button>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/Cart/cart-slice.js";

import { GetCardFromDBByUserId ,calculateTotalPriceAndTotalQuantity,clearItemsInCart} from '../../store/Cart/cart-actions.js';

import {} from "../../store/User/userReducer.js";
import axios from 'axios';

import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
    const user = useSelector((store) => store.user.user);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let items = cart.items;
    const userId = user._id;

    let cartTotalQuantity = useSelector((store) => store.cart.cartTotalQuantity);
  
  
    console.log("item Check:"+items);
    // debugger;
    console.log("cart Check:"+cart);

    const [loadedItems, setLoadedItems] = useState([]);


    useEffect(() => {
        if(userId){
            dispatch(GetCardFromDBByUserId(userId));
            dispatch(calculateTotalPriceAndTotalQuantity(items));
        }
       
        
        // const fetchItems = async () => {
        //   try {
        //     const response = await axios.get(`http://localhost:9000/cart/getAll?userName=${user.userName}`);
        //     const items = await response.data;
        //     setLoadedItems(items);
            // dispatch(GetCardFromDBByUserName(user.userName));
        //   } catch (error) {
        //     console.error('Error fetching items:', error);
        //   }
        // };
        // fetchItems();
    }, [ cartTotalQuantity,dispatch,userId ]);

    // useEffect(() => {
    //   dispatch(updateTotals());
    // }, [cart, dispatch]);


    const checkout = (evt) => {
        navigate("/checkout");
        // evt.preventDefault();
    }

 
    
    
    const cancel = () => {

        dispatch(clearItemsInCart(userId));
        navigate("/home");
        // evt.preventDefault();
    }
    

    return (
      <div className={classes.cart} id="cart-div">
        <h1>Your Shopping Cart</h1>
        <br></br>
        {
          items && items.length >= 1 ? 
          <>
            <ul>
              {items.map((item) => (
                <CartItem
                  key={item.productCode}
                  item={{
                    productCode: item.productCode,
                    productId: item.productId,
                    name: item.name,
                    quantity: item.quantity,
                    total: item.totalPrice,
                    price: item.price,
                    image: item.image
                  }}
                />
              ))}
            </ul>
          
          
        


        
        <button className={classes.checkout} onClick={checkout}>CheckOut</button>
        <button className={classes.checkout} onClick={cancel}>Cancel</button>
        </>
        :
        <h5>Your car is empty.Please add product to cart</h5>
            }
      </div>
    );
  };

  export default Cart;