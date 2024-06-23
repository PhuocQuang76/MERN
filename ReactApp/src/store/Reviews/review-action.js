
import { reviewActions } from './review-slice';
import axios from 'axios';


export const addReview = (postReviewObj) => {
    const { productId, userId, rating, comment } = postReviewObj;
    return async (dispatch) => {
        let reviewProductObj = {
            userId:userId,
            rating:rating,
            comment:comment
        }
        try{
            const response = await axios.post(`http://localhost:9000/product/review/${productId}`, reviewProductObj);
            dispatch(reviewActions.addReviewProductId(response.data));
            

        }catch (error) {
            console.error('Error fetching reviews:', error);
        }
    }

}


export const GetReviewsFromDBByUserId = (userId) => {
    console.log("usernamefromGetDB:" + userId);
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:9000/product/reviewed-products/${userId}`);
            // Update the axios GET request to send userId as a route parameter

            
            let reviews = await response.data;            
            dispatch(reviewActions.fetchReviewItems(reviews));
            
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };
};


export const GetReviewsFromDBByProductId = (productId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:9000/product/getProductById/${productId}`)
            let product = await response.data;
            let reviews = await product.reviews;            
            dispatch(reviewActions.fetchReviewsByProductId(reviews));
        }catch (error) {
            console.error('Error fetching reviews:', error);
        }
    }
}

// export const updateIsReviewExisted = (reviewExisted) =>{
//     const {productId, userId} = reviewExisted;
//     return async (dispatch)=>{
//         try {
//             const response = await axios.get(`http://localhost:9000/review/${productId}/${userId}`)
//             let isReviewd = await response.data;
                     
//             dispatch(reviewActions.updateIsReviewExisted(isReviewd));
//         }catch (error) {
//             console.error('Error fetching reviews:', error);
//         }
//     }
// }


export const updateIsReviewExisted = (reviewObj) =>{
    const {productId} = reviewObj;
    const {reviews} = reviewObj

    return async (dispatch)=>{
        try {
            const reviewExist = await reviews.some(review => review.productId === productId);
            
                     
            dispatch(reviewActions.updateIsReviewExisted(reviewExist));
        }catch (error) {
            console.error('Error fetching reviews:', error);
        }
    }
}