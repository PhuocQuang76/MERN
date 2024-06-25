
import {notificationActions} from './notification-slice';
import axios from 'axios';


export const addStaticNotification = (notificationObj) => {
    return async (dispatch) => {

        console.log("data" + notificationObj);
        
        try {
            const response = await axios.post("http://localhost:9000/notification/addStaticNotifications",notificationObj);
            const staticNotificationObj = response.data;
            dispatch(notificationActions.addStaticNotification(staticNotificationObj));
        } catch (error) {
            console.error('Error adding static notifications:', error);
        }
    }
}

export const addDynamicNotification = (message) => {
    return (dispatch) => {
        console.log("message" + message);
    
        try {
            dispatch(notificationActions.addDynamicNotification(message));
        } catch (error) {
            console.error('Error adding dynamic notification:', error);
        }
    }
}

export const removeDynamicNotificationItem = (index) => {
    return (dispatch) => {
        try {
            dispatch(notificationActions.removeDynamicNotificationItem(index));
        } catch (error) {
            console.error('Error adding dynamic notification:', error);
        }
    }
}