import React, { useState } from "react"; // Remove useSelector from React import
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch from react-redux
import "./ReviewModal.css";
import { addReview } from '../../store/Reviews/review-action';
import {updateModal} from "../../store/MyOrder/myOrder-action";

const ReviewModal =  ({productId, modal,closeReviewModal }) => {
    const user = useSelector((store) => store.user.user);
    const userId = user._id;

    const dispatch = useDispatch();
  
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRatingChange = (event) => {
        
        let value = parseInt(event.target.value);
        if(value < 1 || value > 5){
            alert("insert value from 1 to 5");
            return;
        }
        setRating(event.target.value);
        
        
    };

    const handleCommentChange = (event) => {
        let commnet = event.target.value;
        
            setComment(event.target.value);
        
        
    };

    const handleSubmitReview = () => {
        if(rating < 1 || comment === ""){
            alert("please insert values");
            return;
        }
     
        // Add your logic to handle the submission of the review
        let reviewObj = {
            productId:productId,
            userId:userId,
            rating:rating,
            comment:comment
        }
        let modalObj = {
            productId:"",
            isOpen:false
        }
        
        dispatch(addReview(reviewObj));
        dispatch(updateModal(modalObj));
        
        // closeReviewModal();
    };
    const handleCloseModal = () => {
        // closeReviewModal();
        let modalObj = {
            productId:"",
            isOpen:false
        }
        dispatch(updateModal(modalObj));
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

  return (
    <>
        {modal && (
            <div className="review-modal">
    
                <button className="close-modal" onClick={handleCloseModal}>
                    close
                </button>
                <h4>Leave a Review</h4>
                <label htmlFor="rating">Rating:</label>
                <input type="number" value={rating} onChange={handleRatingChange} />
                <br></br>
                <label htmlFor="comment">Comment:</label>
                <textarea value={comment} onChange={handleCommentChange} />
                <br></br>
                <button className="submitModel" onClick={handleSubmitReview}>Submit</button>
            </div>
        )}
    </>
  );
}

export default ReviewModal;