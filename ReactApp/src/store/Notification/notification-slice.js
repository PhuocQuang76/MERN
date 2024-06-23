import { createSlice } from '@reduxjs/toolkit';


const notificationSlice = createSlice({
    name: "notifications",
    initialState: {
        notifications: [],
        
    },
    reducers: {
        addNotification(state, action) {
            return {
                ...state,
                notifications: [...state.notifications, action.payload]
            };
        },


        removeNotification(state, action) {
            return {
                ...state,
                notifications: state.notifications.filter(
                    (notification) => notification._id !== action.payload
                )
            };
        },

        removeNotificationByUrl(state,action){
            return {
                ...state,
                notifications: state.notifications.filter(
                    (notification) => notification.url !== action.payload
                ),
            };
        },

        loadNotification(state,action){
            return {
                ...state,
                notifications: action.payload,
            }
        },

        clearNotification(state, action){
            return{
                ...state,
                notifications:[]
            }
        }
    }

    
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;
