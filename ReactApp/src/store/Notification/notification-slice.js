import { createSlice } from '@reduxjs/toolkit';


const notificationSlice = createSlice({
    name: "notifications",
    initialState: {
        staticNotification:[],
        dynamicNotifications: [],
        
    },
    reducers: {
        addStaticNotification(state, action) {
            return {
                ...state,
                staticNotification: [...state.staticNotification, action.payload]
            };
        },




        addDynamicNotification(state, action) {
           
            return {
                ...state,
                dynamicNotifications: 
                 [...state.dynamicNotifications, action.payload]
            };
        },


        removeDynamicNotificationItem(state, action) {
            state.dynamicNotifications.splice(action.payload, 1); // Remove item at the provided index
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
