
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/Cart/cart-slice.js";

import {getCartByStatus} from '../../store/MyOrder/myOrder-action.js';

import axios from 'axios';

import classes from './MyOrder.module.css';
import MyOrderItem from './MyOrderItem';
import ReviewModal from "../Modal/ReviewModal.js";

const MyOrders = () => {
    const user = useSelector((state) => state.user.user);

    
    const myOrder = useSelector((state) => state.myOrder);
    const items = myOrder.items;
    const productId = myOrder.modal.productId;
    const isOpen = myOrder.modal.isOpen;

    const userId = user._id;

    const dispatch = useDispatch();

    const [activeTab, setActiveTab] = useState('Pending');
   
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
  
    const handleReviewClick = (productId) => {
      setIsModalOpen(true);
      setSelectedProductId(productId);
    };
  
    const closeReviewModal = () => {
      setIsModalOpen(false);
      setSelectedProductId(null);
    };



    // const fetchData = async (status) => {
    //     // Make a request to get data from the database based on the status (pending or accepted)
    //     const response = await fetch(`/api/orders?status=${status}`);
    //     const data = await response.json();
    //     setOrders(data);
    // };

    useEffect(() => {
        let myOrderObject = {
            userId:userId,
            status:activeTab
        }
        dispatch(getCartByStatus(myOrderObject))
        //fetchData(activeTab); // Fetch data when the component mounts or when activeTab changes
    }, [activeTab]);

    return (
        
        <div className={classes.myOrder} id="about" > 
            <div className="col-md-12"></div>
                <h1>My Orders</h1>
                <br></br>


                {isOpen && (
                    <ReviewModal 
                        productId={productId}
                        modal={true}
                        className={classes.ReviewModal} 
                        closeReviewModal={closeReviewModal}
                    />
                )}


                <div>
                    <button 
                        className={activeTab === 'Pending' ? classes.activeButton : ''}
                        onClick={() => setActiveTab('Pending')}>Pending
                    </button>
                    <button 
                        className={activeTab === 'Accepted' ? classes.activeButton : ''}
                        onClick={() => setActiveTab('Accepted')}>Accepted
                    </button>
                    <button 
                        className={activeTab === 'Delivered' ? classes.activeButton : ''}
                        onClick={() => setActiveTab('Delivered')}>Delivered
                    </button>
                    <button 
                        className={activeTab === 'Canceled' ? classes.activeButton : ''}
                        onClick={() => setActiveTab('Canceled')}>Canceled
                    </button>
                </div>
                <br></br>

            
            
                {
                items && items.length >= 1 ? 
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Date</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item,index) => {
                                    //return item.name
                                    return <MyOrderItem 
                                    key={index} 
                                    item={item} 
                                    />
                                })
                            } 
                        </tbody>
                    </table>
                    
                </> 
                : 
                <h4>Please add product to cart</h4>
            }
        </div> 

    );
};

export default MyOrders;
