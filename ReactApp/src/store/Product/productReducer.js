import * as actionTypes from "../actionTypes";

let initialState = {
    product : {
        productCode:"",
        name: "",
        price: 0,
        image: "",
        desc: "",
        rating: "",
        reviews:[]
    },

    products:[],      // id:"",
    loading:false
  
}


let productReducer = (state=initialState, action)=>{

    console.log("Product Actions ", action)

    switch (action.type) {

        case actionTypes.ADD_PRODUCT:
            //...state == is extracting all the states present in store
            //action.payload - is the new user data that we need to add to store
            //User: action.payload - new payload is assigned to used

             return {...state, product: action.payload}//new state dispatched to store upon update

    

        case actionTypes.FETCH_PRODUCTS:
            return {...state, products: action.payload}

        default:
            return state //if no action type matched return default state
    }
}

export default productReducer;