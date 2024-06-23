
import Button from "../UI/Button.jsx";
import React, { useState ,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useNavigate } from 'react-router-dom';
import { AddItemToCartInDB } from '../../store/Cart/cart-actions.js';
import star from "../../images/star-icon.svg";
import halfStar from "../../images/star-half-icon.svg";
import lineStar from "../../images/star-line-icon.svg";
// import { io } from 'socket.io-client';



const ProductDetail = ({ product }) => {
    // const [socket, setSocket] = useState(null);
    const [fullRating, setFullRating] = useState(0);
    const [halfRating, setHalfRating] = useState(0);

    const [addProduct, setAddProduct]= useState(false);
    const reviews = product.reviews;

    let productId = product._id;
    const user = useSelector((store) => store.user.user);
    let userId = user._id;
    console.log(userId);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const viewReviews = () => {
        navigate(`/review/${product._id}`);
    }

    const calRating = (reviews) => {
      if(reviews.length === 0){
        return 0;
      }

      const totalRating = reviews.reduce((acc,review) => acc + review.rating ,0 );
      const averageRating = totalRating / reviews.length;
      return averageRating;
    }

    const handleAddToCart = () => {
        if (!userId) {
        navigate("/user");
      
    }else {
        const newCart = {
            userId: userId,
            // status:"Pending",
            // date:"",
            // cartTotalAmount:0,
            // cartTotalQuantity:0,
            item: {
                productId: product._id,
                productCode:product.productCode,
                name: product.name,
                price: product.price,
                totalPrice:product.price * product.quantity,
                image: product.image,
                desc: product.desc,
                rating: product.rating,
                quantity: 1,
                status:"Pending",
                date:""
            },
        };
        dispatch(AddItemToCartInDB(newCart));


        // Notify the server when a product is added to the cart
        // if (socket) {
        //     socket.emit("addProductToCart", { userId: userId, productId: product._id });
        // }
    }};

    // const handleNotification = () => {
    //     alert("Product added to the cart!"); // Display a simple alert message
    //     socket.emit("sendNotification",{
    //         userName:user,
    //         productName:product
    //     })
    // }

    // useEffect(() => {
    //     const newSocket = io("http://localhost:9001"); // Connect to your socket server
    //     setSocket(newSocket);

    //     return () => newSocket.close(); // Close socket connection when component unmounts
    // }, []);

    useEffect(()=> {
      const avgRating = calRating(reviews);
      const wholeNum = parseInt(avgRating);
      const halfNum = avgRating%wholeNum;

      setFullRating(wholeNum);

      setHalfRating(halfNum);
      
    })
    const generateStarIcons = (wholeRating, halfRating) => {
      const stars = [];
      if (wholeRating !== 0) {
          for (let i = 0; i < wholeRating; i++) {
              stars.push(
                  <img 
                      key={i} 
                      src={star} 
                      alt="star" 
                      style={{ width: '15px', height: '15px' }} // Set width and height styles here
                  />  
              );
          }
      }else{
          for (let i = 0; i < 5; i++) {
              stars.push(
                  <img 
                      key={i} 
                      src={lineStar} 
                      alt="star" 
                      style={{ width: '15px', height: '15px' }} // Set width and height styles here
                  />  
              );
          }
      }
      if (halfRating > 0) {
          stars.push(
              <img 
                  key={'half'} 
                  src={halfStar} 
                  alt="star" 
                  style={{ width: '15px', height: '15px' }}// Set width and height styles here
              />
          );
      }
      return stars;
  };

    return (
        <div className="meal-item">
            <article>
                <img src={`http://localhost:9090/${product.image}`} alt={product.name} />
                <div>
                    <h3>{product.name}</h3>
                    <p className="meal-item-price">${product.price}</p>
                    <p className="meal-item-description">{product.desc}</p>
                </div>
                <div className="meal-item-actions">
                    <div>
                        {generateStarIcons(fullRating,halfRating)}
                    </div>
                    <Button onClick={() => {
                        handleAddToCart();
                        // handleNotification();
                        }}>Add to Cart
                        
                    </Button>
                    <br></br>
                    {/* <button onClick={() => viewReviews(productId)}>View Reviews</button> */}
                    <Button onClick={viewReviews}>View Reviews</Button>
                </div>
            </article>
        </div>
    );
};

export default ProductDetail;