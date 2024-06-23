import cartActions from "../Cart/cart-actions";



export const paymentHandler = (paymentObject)=> {
    const {userId, items} = paymentObject;
    if (!paymentObject) {
        console.log("paymentObject is error...")
        return;
    }
    return (dispatch) => {
        
        window.fetch(`http://localhost:9000/cart/acceptedUpdate/${userId}`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({userid:userid, cart:cart})
            body: JSON.stringify(items)
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
    }
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