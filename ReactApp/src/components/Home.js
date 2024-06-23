import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/Product/productAction";
import ProductDetail from "./Product/ProductDetail";
// import { io } from "socket.io-client";


const Home = () => {
  // const [socket, setSocket] = useState(null);
    //   const [loadedProducts, setLoadedProducts] = useState([]);


    const dispatchToFetchProduct = useDispatch();
    let product = useSelector((state) => state.product);
    console.log(product.products);



    //component did mount
    useEffect(() => {
        dispatchToFetchProduct(getProducts());

    }, [product.product]);

    // useEffect(() => {
    //   setSocket(io("http://localhost:9001"));
    // }, []);

    // useEffect(() => {
    //     socket?.emit("addProductTocart", product);
    // }, [socket, product]);


    return (
        <ul id="meals">
          {product.products && product.products.length > 0 ? (
            product.products.map((productItem) => (
              <li key={productItem._id}>
                <ProductDetail product={productItem} />
              </li>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </ul>
      );
};

export default Home;