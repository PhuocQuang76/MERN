import { createSlice } from '@reduxjs/toolkit';


const reviewSlice = createSlice({
    name: "review",
    initialState: {
        reviews: [],
        productReviews:[],
        isReviewExisted:false,
    },
    reducers: {
        
        addReviewProductId(state, action) {
            let productIdObj = {
                "productId": action.payload
            };

        
        
            return {
                ...state,
                reviews: [...state.reviews, productIdObj]
            };
        
        },

        fetchReviewItems(state, action){
            return{
                ...state, reviews:action.payload
            }
        },

        fetchReviewsByProductId(state, action){
            return{
                ...state, productReviews:action.payload
            }
        },

        updateIsReviewExisted(state, action){
            return{
                ...state,
                isReviewExisted:action.payload
            }
        }

    }
});

export const reviewActions = reviewSlice.actions;
export default reviewSlice.reducer;
