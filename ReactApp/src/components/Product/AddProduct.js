import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, userNavigate} from 'react-router-dom';
import { AddProductToDB } from '../../store/Product/productAction';

const AddProduct = () => {
    
    let product = useSelector((store) => store.product); // reads defined data in reducer
    
    const dispatchToDB = useDispatch();
    const navigate = useNavigate();

    const [productCode, setProductCode] = useState(product.product.productCode);
    const [name, setName] = useState(product.product.name);
    const [price, setPrice] = useState(product.product.price);
    const [desc, setDesc] = useState(product.product.desc);
    const [image, setImage] = useState(product.product.image);
    const [rating, setRating] = useState(product.product.rating);
    const [reviews, setReviews] = useState(product.product.reviews);

    

    console.log("name:" + name);


    
    // useEffect(() => {
    //     // Set default values for the form
    //     // setName(product.product.name);

    // }, [product.product]);
    // Function to reset the input fields
    function resetInputFields() {
        setProductCode('');
        setName('');
        setPrice(0);
        setDesc('');
        setImage('');
        setRating('');
        setReviews([]);
    }

    let addProductData = (evt)=> {
        evt.preventDefault();

        const newProduct = {
        productCode: productCode,
        name: name,
        price: price,
        image:image,
        desc:desc,
        rating:rating,
        reviews:reviews

    };

    dispatchToDB(AddProductToDB(newProduct));
    resetInputFields();
    navigate("/home");
};
  

    return(
        <div id="add_product">
            <h1>Create New Product</h1>

            <form onSubmit={addProductData}>
                <div>
                    <label htmlFor="productCode">Product Code</label>
                    <input id="productCode" name="productCode" required 
                        value={productCode}
                        onChange={(e) => setProductCode(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="title">Product Name</label>
                    <input id="name" type="text" name="name" required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
               
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" name="price" required 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="image">Image</label>
                    <input id="image" type="text" name="image" required 
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="desc">Description</label>
                    <textarea id="desc" name="desc" rows="5" required 
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="rating">Rating</label>
                    <input id="rating" name="rating"
                        value={rating}    
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>



                <div >
                    <input type="button" className={"btn btn-primary col-md-2"} value={"Cancel"}/>
                    
                    <input type="submit" className={"btn btn-primary col-md-2"} 
                      value={"add"} />
                    
                </div>
            </form>
        </div>
    )
}
export default AddProduct;



//Assessment #5 react and its fundamentals - 30/05/2024


//Q 1. Cart Implementation - <3 marks>


// Create a product component using functional component and hooks (try using useRef as react hook and implement accordingly)
// Create a form to allow user to submit Product Details - name, price, desc, rating
// Create an action method to add the detail to database using a server api
// Server Side - Create product router and api to save the product using productdatamodel
// Everything should be done in continuation with shopping cart project


//Q 2 Cart Implementation - <5 marks>


// Create New Cart Component using react hooks, functional component
// Each Item in this component should be added from Product Component 
// Now each Product should have general fields, like Name, Description, Rating, Price, Category (New Product Document/ Collection)
// In Product component each item when we click to display details should also have a button "Add To Item" on click should add to New Cart
// On Cart Component, Button for save to Checkout should save the cart item to database (New Cart Document/ Collection)



// Needs to follow bootstrap css or individual css <1 mark>
// Must follow html5 standard structure either form based or div based <1 mark>