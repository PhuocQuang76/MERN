

import * as actionTypes from "../actionTypes";

let initialState = {
    user : {
        userName : "Dummy",
        password : "asdsadasda",
        street : "somewhere on earth",
        mobile :898989898
    }
}

//action => type and payload

let userReducer = (state=initialState, action)=>{

    console.log("User Actions ", action)

    switch (action.type) {

        case actionTypes.ADD_USER_TO_STORE:
            //...state == is extracting all the states present in store
            //action.payload - is the new user data that we need to add to store
            //User: action.payload - new payload is assigned to used

            return {...state, user: action.payload} //new state dispatched to store upon update
        default:
            return state //if no action type matched return default state
    }
}

export default userReducer;


// import { createSlice } from '@reduxjs/toolkit';
// import * as actionTypes from '../actionTypes';

// const initialUserState = {
//   user: {
//     userName: 'Dummy',
//     password: 'asdsadasda',
//     street: 'somewhere on earth',
//     mobile: 898989898,
//   },
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState: initialUserState,
//   reducers: {
//     [actionTypes.ADD_USER_TO_STORE]: (state, action) => {
//       console.log('User Actions', action);
//       return {
//         ...state,
//         user: action.payload,
//       };
//     },
//     [actionTypes.UPDATE_USERNAME]: (state, action) => {
//       console.log('User Actions', action);
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           userName: action.payload,
//         },
//       };
//     },
//   },
// });

// export const { addUserToStore, updateUsername } = userSlice.actions;
// export default userSlice.reducer;



//-------------------------

/*
without using redux toolkit
import * as actionTypes from "../actionTypes";

export const AddUserToStore = (user) => {
  return {
    type: actionTypes.ADD_USER_TO_STORE,
    payload: user,
  };
};

export const UpdateUserName = (newUserName) => {
  return {
    type: actionTypes.UPDATE_USERNAME,
    payload: newUserName,
  };
};

const initialState = {
  user: {
    userName: 'Dummy',
    password: 'asdsadasda',
    street: 'somewhere on earth',
    mobile: 898989898,
  },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_USER_TO_STORE:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.UPDATE_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          userName: action.payload,
        },
      };
    default:
      return state;
  }
}

export default userReducer;

*/