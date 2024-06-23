import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewItem = ({ userId, rating, comment }) => {
    const navigate = useNavigate();
    const backToProduct = () => {
        navigate("/home");
    }

    return (
        <div id="about">
            <hr />
            <div>
                <p>UserId: {userId}</p>
                <table>
                    <tr>
                        <td>Rating:</td>
                        <td>{rating}</td>
                    </tr>
                    <tr>
                        <td>Comment:</td>
                        <td>{comment}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default ReviewItem;