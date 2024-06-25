import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReviewItem from './ReviewItem';
import {useDispatch, useSelector } from 'react-redux';
import {GetReviewsFromDBByProductId} from '../../store/Reviews/review-action.js';

const Review = ()=> {
    const { productId } = useParams();
    
    const navigate = useNavigate();
    

    let reviews = useSelector((state)=> state.review.productReviews)

    const dispatch = useDispatch();

    const backToProduct = ()=> {
        navigate("/home");
    }

    useEffect(()=>{
        dispatch(GetReviewsFromDBByProductId(productId));
    })
    return(
        <div id="about">
            <h1>Review List</h1>
            <button onClick={backToProduct}>Back</button>
            {
                reviews && reviews.length > 0 ? (
                    reviews.map((review) => (
                        <>
                        
                            
                            <ReviewItem 
                                key={review._id}
                                userId={review.userId} 
                                rating={review.rating} 
                                comment={review.comment}/>
                        </>
                    ))
                ):(
                    <p>No review</p>
                )
            }
        </div>
    )
}


export default Review;