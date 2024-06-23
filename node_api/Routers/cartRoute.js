let express = require("express");

let cartRouter = express.Router();


let cartDataModel = require("../DataModels/CartDataModel");

cartRouter.post('/add-item', async (req, res) => {
    
    try {
        console.log("requestBody: " + req.body.userId);

        let { userId, item } = req.body;
        // let dateObj = new Date();

        // let month = String(dateObj.getMonth() + 1)
        //     .padStart(2, '0');
            
        // let day = String(dateObj.getDate())
        //     .padStart(2, '0');

        // let year = dateObj.getFullYear();
        // let actionDate = day + '/' + month + '/' + year;

        // console.log(dateObj);

        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
        const dateString = formattedDate;

        console.log(dateString);

        // Check if the required fields are present
        if (!userId || !item.productId) {
            return res.status(400).json({ error: 'Missing userId, or productId' });
        }

        // Find the cart for the current user
        let cart = await cartDataModel.findOne({ userId });

        if (!cart) {
            // Cart doesn't exist, create a new cart
            item.date = dateString;
            console.log("cart not found. Create new cart.");
            cart = new cartDataModel({ 
                userId, 
                items: [item] 
            });
            await cart.save();
        } else {
            console.log("cart found.");
            // Cart exists, update the products array
            const existingProductIndex = cart.items.findIndex(p => p.productId === item.productId && p.status ==="Pending");
    
            item.date = dateString;

            if (existingProductIndex === -1) {
                // Product doesn't exist, add it to the cart
                item.totalPrice = item.price;
                cart.items.push(item);
                console.log("pushed Item");
            } else {
                const existingProduct = cart.items[existingProductIndex];
            
                if (existingProduct.status === "Pending") {
                    console.log("item is existed and status is Pending");
                    // Product exists with status "Pending", increase the quantity
                    existingProduct.quantity += 1;
                    console.log("existingProduct.quantity: " + existingProduct.quantity);
                    existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
                    cart.items[existingProductIndex] = existingProduct;
                } else {
                    console.log("item is existed but status is not Pending");
                    // Product exists with status other than "Pending", do not increase quantity
                    // Add the new item to the cart instead
                    item.totalPrice = item.price;
                    cart.items.push(item);
                    console.log("pushed Item");
                }
            }
            await cart.save();
        }
        const statusItems = cart.items.filter((item) => item.status === "Pending");
        res.status(200).json(statusItems);


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});




// Update a cart after paying
 cartRouter.patch('/acceptedUpdate', async (req, res) => {
    try {
        const { userId, items } = req.body;
        const cart = await cartDataModel.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemIndex = cart.items.findIndex(i => i.productId === item.productId && i.status === "Pending");

            if (itemIndex === -1) {
                return res.status(404).json({ error: 'Item not found in cart' });
            }

            const cartItem = cart.items[itemIndex];

            console.log("Updating status to 'Accepted' for item with productId: " + cartItem.productId);

            cartItem.status = "Accepted";

            cart.items[itemIndex] = cartItem;
        }

        await cart.save();

        const pendingItems = cart.items.filter((item) => item.status === "Pending");
        res.status(200).json(pendingItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update cart' });
    }
});


//Reduce quantity by 1 or remove if quantity is turn 0
cartRouter.patch("/reduceItem", async (req, res) => {
    try {
        const { userId, item } = req.body;

        if (!userId || !item) {
            res.status(400).json({ error: 'Missing userId or item' });
            return;
        }

        const cart = await cartDataModel.findOne({ userId });

        if (!cart) {
            res.status(404).json({ error: 'Cart not found' });
            return;
        }

        const itemIndex = cart.items.findIndex(i => i.productId === item.productId && i.status === "Pending");

        if (itemIndex === -1) {
            res.status(404).json({ error: 'Item not found in cart' });
            return;
        }

        const cartItem = cart.items[itemIndex];
        console.log("cartItem.quantity: " + cartItem.quantity);

        if (cartItem.quantity === 1) {
            cart.items.splice(itemIndex, 1); // Remove item from the cart
        } else if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            cartItem.totalPrice = cartItem.quantity * cartItem.price;
            cart.items[itemIndex] = cartItem;
        }

        await cart.save();

        const statusItems = cart.items.filter((item) => item.status === "Pending");
        res.status(200).json(statusItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


//increase item quantity by 1
cartRouter.patch("/increaseItem", async(req,res)=>{
    try{
        const { userId, item } = req.body;

        if (!userId || !item) {
            res.status(400).json({ error: 'Missing userName or item' });
            return;
        }
      
        const cart = await cartDataModel.findOne({ userId });
      
        if (!cart) {
            res.status(404).json({ error: 'Cart not found' });
            return;
        }
      
        const itemIndex = cart.items.findIndex(i => i.productId === item.productId  && i.status === "Pending");
      
        if (itemIndex === -1) {
            res.status(404).json({ error: 'Item not found in cart' });
            return;
        }

        const cartItem = cart.items[itemIndex];

        console.log("cartItem:"+cartItem);

        cartItem.quantity += 1;
        cartItem.totalPrice = cartItem.quantity * cartItem.price;
        // if (cartItem.quantity === 1) {
        //     cart.items.splice(itemIndex, 1);
        // } else {
        //     cartItem.quantity -= 1;
        // }

        cart.items[itemIndex]=cartItem;
      
        await cart.save();
        console.log(" cart.items[itemIndex] : " +  cart.items[itemIndex].quantity);
        //const items = cart.items.filter((i) => i.productCode !== item.productCode);
        const statusItems = cart.items.filter((item) => item.status === "Pending");
        res.status(200).json(statusItems);
            
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


//cancel all order with no checkout
cartRouter.delete('/deleteItems/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await cartDataModel.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        } 

        // Loop through cart.items and remove items with status "Pending"
        cart.items = cart.items.filter(item => item.status !== "Pending");

        await cart.save();

        return res.status(200).json({ message: 'Items with status "Pending" removed successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


//Remove an item in the cart with Pending status
cartRouter.delete('/deleteItem/:userId/:productId', async (req, res) => {
    try {
        let userIdParam = req.params["userId"];
        let productIdParam = req.params["productId"];

        const cart = await cartDataModel.findOne({ userId: userIdParam });

        if (!cart) {
            res.status(404).json({ error: 'Cart not found' });
        } else {
            
            const itemIndex =  cart.items.findIndex(
                (item) => item.productId === productIdParam && item.status === "Pending"
            );
            cart.items.splice(itemIndex,1);
            console.log("cartSpliceIndex: "+ cart.items.length);

            await cart.save();

            const statusItems = cart.items.filter((item) => item.status === "Pending");
            res.status(200).json(statusItems);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


cartRouter.patch("/updateStatusToDeliveredOrCancel", async (req, res) => {
    try {
        const { userId, productId, date, status, action } = req.body;
        console.log("status:"+ status)
        if (!userId || !productId) {
            res.status(400).json({ error: 'Missing userId or productId' });
            return;
        }

        const cart = await cartDataModel.findOne({ userId });

        if (!cart) {
            res.status(404).json({ error: 'Cart not found' });
            return;
        }

        const itemIndex = cart.items.findIndex(i => i.productId === productId && i.date === date && i.status === status);

        if (itemIndex === -1) {
            res.status(404).json({ error: 'Item not found in cart' });
            return;
        }
    
        const cartItem = cart.items[itemIndex];

        if (action === "cancel") {
            // Item matches the specified productId, date, and status
            console.log("Item found with matching productId, date, and status:", cartItem);
            cartItem.status = "Canceled"; // Change the status to "Cancel"
            cart.items[itemIndex]=cartItem;
                
        }
        else if (action === "delivery") {
            // Item matches the specified productId, date, and status
            console.log("Item found with matching productId, date, and status:", cartItem);
            cartItem.status = "Delivered"; // Change the status to "Cancel"
            cart.items[itemIndex]=cartItem;
        } else {
            res.status(400).json({ error: 'Invalid action, must be "cancel" or "delivery"' });
            return;
        }

        await cart.save(); // Save the updated cart with item status changed
        console.log("saved")
        const statusItems = cart.items.filter((item) => item.status === status);
        res.status(200).json(statusItems);
        console.log("done")
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


cartRouter.patch("/reOrder", async (req, res) => {
    console.log("reorder2");
    try {
        const { userId, productId, date, status } = req.body;
        console.log("status:"+ status)
        if (!userId || !productId) {
            res.status(400).json({ error: 'Missing userId or productId' });
            return;
        }

        const cart = await cartDataModel.findOne({ userId });

        if (!cart) {
            res.status(404).json({ error: 'Cart not found' });
            return;
        }

        const itemIndex = cart.items.findIndex(i => i.productId === productId && i.date === date && i.status === status);

        if (itemIndex === -1) {
            res.status(404).json({ error: 'Item not found in cart' });
            return;
        }
    
        const cartItem = cart.items[itemIndex];
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
        const dateString = formattedDate;
        cartItem.date = dateString;
        cartItem.status = "Pending";

        cart.items[itemIndex] = cartItem;

        await cart.save();

        console.log("saved")
        const statusItems = cart.items.filter((item) => item.status === status);
        res.status(200).json(statusItems);
        console.log("done")
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



//QUERY: 
//http://localhost:9000/cart/getAll?userIde=A3
//req.query - is used to read the values present after ? in api path

cartRouter.get("/getAll", async (req, res) => {
    try {
        // const { userName } = req.query;
        let userId = req.query.userId;

        // Find the cart for the current user
        const cart = await cartDataModel.findOne({ userId });

        if (!cart) {
            res.status(404).json({ error: 'Cart not found' });
        } else {
            // const items = cart.items;
            const statusItems = cart.items.filter((item) => item.status === "Pending");
            res.status(200).json(statusItems);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

 //http://localhost:9090/getByStatus?userId=123&status=pending
cartRouter.get("/getByStatus", async (req, res) => {
    try {
        let userId = req.query.userId;
        let status = req.query.status;

        // Find the cart for the current user
        const cart = await cartDataModel.findOne({ userId });

        if (!cart) {
            res.status(404).json({ error: 'Cart not found' });
        } else {
            const statusItems = cart.items.filter((item) => item.status === status);
            res.status(200).json(statusItems);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});




 cartRouter.patch('/quantityUpdate', async (req, res) => {
    try {
        
        const { userId,productId,updatedQuantity ,status} = req.body;
        console.log("userId:"+userId);
        console.log("productId:"+productId);
        console.log("updatedQuantity:"+updatedQuantity);
        console.log("status:"+status);

        const cart =  await cartDataModel.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        } 

        const itemIndex = cart.items.findIndex(i => i.productId === productId);
      
        if (itemIndex === -1) {
            res.status(404).json({ error: 'Item not found in cart' });
            return;
        }

        const cartItem = cart.items[itemIndex];

        console.log("cartItem:"+cartItem);

        cartItem.quantity = updatedQuantity;
        cartItem.totalPrice = cartItem.quantity * cartItem.price;
        // if (cartItem.quantity === 1) {
        //     cart.items.splice(itemIndex, 1);
        // } else {
        //     cartItem.quantity -= 1;
        // }

        cart.items[itemIndex]=cartItem;
      
        await cart.save();
        //const items = cart.items.filter((i) => i.productCode !== item.productCode);

        
        const statusItems = cart.items.filter((item) => item.status === status);
        res.status(200).json(statusItems);


        // res.status(200).json(cart.items);
            
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = cartRouter;




//QUERY: 
//http://localhost:4000/data?name=suyash&session=express
//req.query - is used to read the values present after ? in api path

// defaultRouter.get('/data', function (req, res) {
//     let queryString = req.query //req.query - is used to read the values present after ? in api path
 
//     //console.log(queryString)
//     //console.log(res)
//     console.log(req)
//     if (queryString.session == "express") {
//         res.json({"name " : queryString.name})
//     }else{
//         res.json(queryString)
//     }
// })







// const express = require('express');
// const Cart = require("../DataModels/CarttDataModel");

// const cartRouter = express.Router();

// // Create a new cart
// cartRouter.post('/cart', async (req, res) => {
//   const { userId, products } = req.body;

//   try {
//     const cart = await Cart.create({ userId, products });
//     res.status(201).json(cart);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create cart' });
//   }
// });

// // // Get all carts for a user
// // router.get('/cart/:userId', async (req, res) => {
// //   const { userId } = req.params;

// //   try {
// //     const carts = await Cart.find({ userId });
// //     res.json(carts);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to get carts' });
// //   }
// // });

// // // Get a specific cart
// // router.get('/cart/:userId/:cartId', async (req, res) => {
// //   const { userId, cartId } = req.params;

// //   try {
// //     const cart = await Cart.findOne({ userId, _id: cartId });
// //     if (!cart) {
// //       return res.status(404).json({ error: 'Cart not found' });
// //     }
// //     res.json(cart);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to get cart' });
// //   }
// // });



// // // Delete a cart
// // router.delete('/cart/:userId/:cartId', async (req, res) => {
// //   const { userId, cartId } = req.params;

// //   try {
// //     const cart =



//QUERY: 
//http://localhost:4000/data?name=suyash&session=express
//req.query - is used to read the values present after ? in api path

// defaultRouter.get('/data', function (req, res) {
//     let queryString = req.query //req.query - is used to read the values present after ? in api path
 
//     //console.log(queryString)
//     //console.log(res)
//     console.log(req)
//     if (queryString.session == "express") {
//         res.json({"name " : queryString.name})
//     }else{
//         res.json(queryString)
//     }
// })


//PARAM 
//http://localhost:4000/nameByID/2000
//req.params["id"] //reads the parameter passed in path of API, we can have multiple query params

// defaultRouter.get('/nameByID/:id', function (req, res) {
//     let queryParam = req.params["id"] //reads the parameter passed in path of API, we can have multiple query params
 
//     console.log(queryParam)
//     if (queryParam == 2000) {
//         res.send("<h1>User is present</h1>")
//     }else{
//         res.send("<h1>User is not present</h1>")
//     }
// })