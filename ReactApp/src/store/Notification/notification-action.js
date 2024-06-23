
import {notificationActions} from './notification-slice';
import axios from 'axios';



export const addNotification = (notificationObj) => {
    return async (dispatch) => {
        dispatch(notificationActions.addNotification(notificationObj));
    }
}