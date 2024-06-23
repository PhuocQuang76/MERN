let express = require("express");

let productRouter = express.Router();


let productDataModel = require("../DataModels/ProductDataModel");

productRouter.post("/add",(req,res) => {
    console.log(req.body) //json data posted from API in body
    
    let newProduct = new productDataModel(req.body);

    productDataModel.findOne({productCode:newProduct.productCode})
        .then((existingProduct)=>{ 
            if(existingProduct) {
                console.log("Product is already existed ", existingProduct);
                res.send(existingProduct);
            }
            else {//if user object is not present in users collection so we need to create 
                //new user and this is sign up

                newProduct.save()
                    .then((savedProduct)=>{//will get _id once document is created
                        console.log("successful saved ", savedProduct);
                        res.json(savedProduct);
                    
                    }).catch((err)=>{
                        console.log('Error saving product:', err);
                        res.status(500).send('Error while saving prodcuct new object');
                    })
            }
        })
        .catch((err)=>{
            console.log("create new product", err);
            res.send("error while searching product existing")
        })
    
})

productRouter.post('/review/:productId', async (req, res) => {
    const { userId, rating, comment } = req.body;
    const productId = req.params.productId;
    console.log("productId:"+ productId);

    try {
        const existingProduct = await productDataModel.findOne({_id: productId});

        if (existingProduct) {
            const existingReview = existingProduct.reviews.find(review => review.userId === userId);

            if (existingReview) {
                console.log("Review by user already exists for this product");
                res.status(404).send({ error: "Review by user already exists for this product" });
            } else {
                const newReview = {
                    userId: userId,
                    rating: rating,
                    comment: comment
                };

                existingProduct.reviews.push(newReview);
                await existingProduct.save();
                res.send({ message: "Review added successfully" });
            }
        } else {
            console.log("Product not found");
            res.status(404).send({ error: "Product not found" });
        }
    } catch (error) {
        console.error("Error while adding review:", error);
        res.status(500).send({ error: "Internal server error" });
    }
});
    

//code to fetch all the users from user collection and return back 
productRouter.get("/products/get",(req, res)=>{
    productDataModel.find()
    .then((allProducts)=>{
        res.send(allProducts)
    })
    .catch(()=>{
        res.send("error while fetching products")
    })
})
  

// GET all productIds reviewed by userId
productRouter.get('/reviewed-products/:userId', async (req, res) => {
    const userId = req.params.userId;
    console.log("UserId:"+userId);
    try {
        const productsWithReviews = await productDataModel.find({ 'reviews.userId': userId });

        const productIds = [];
        productsWithReviews.forEach(product => {
        const reviewedProducts = product.reviews.filter(review => review.userId === userId);
        reviewedProducts.forEach(review => {
            productIds.push({ productId: product._id });
        });
    });

    res.json(productIds);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// GET all reviewed by productId
productRouter.get('/getProductById/:productId', async (req, res) => {
    const productId = req.params.productId;

    try {
        const findProductById = await productDataModel.findOne({ '_id': productId });
        res.json(findProductById);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


const { ObjectId } = require('mongodb');



// GET route to find review by productId and userId
productRouter.get('/review/:productId/:userId', async (req, res) => {
    const productId = req.params.productId;
    const userId = req.params.userId;
    console.log(userId);

    try {
        const findProductById = await productDataModel.findOne({ '_id': productId });

        if (findProductById) {
            const foundOne = await productDataModel.findOne({ 'reviews.userId': userId });
            let isReviewd;
            if (foundOne) {
                isReviewd = true;
            } else {
                isReviewd = false;
            }
            
            res.json(isReviewd);
        } else {
            res.json(false);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
module.exports = productRouter;