
import {AllRegisterActions} from './AllRegister-slice'; // Ensure correct import of VaccineActions
import axios from 'axios';


export const addRegisterToDB = (newItem) => {

    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:9001/user/addRegister",newItem);
            const register = response.data;
            dispatch(AllRegisterActions.addRegisterItem(register));
        } catch (error) {
            console.error('Error getting all vaccines item', error);
        }
    }
}


export const getByStatusFromDB = (getStatusObj) => {
    const {userId, status} = getStatusObj;
    if (!getStatusObj) {
        console.log("getStatusObj is error...");
        return;
    }
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:9001/user/getByStatus/${userId}/${status}`);
            console.log("items: " + response.data);
            // calculatePriceQuantityTotal(response.data);
            const fetchObj = {
                "userId": userId,
                "items": response.data, // Update to use response.data
                "status": status
            };
            dispatch(AllRegisterActions.getByStatus(fetchObj));
        } catch (error) {
            console.error('Error fetching registered items from cart:', error);
        }
    }
}



export const handleGetAllRegisterByStatus = (status) => {
   
    return async (dispatch) => {
        try{
            const response = await axios.get(`http://localhost:9001/admin/getRegisteredByStatus/${status}`);
            
            const RegisterByStatusObj = {
                "items":response.data,
                "status":status
            }

            
            
            dispatch(AllRegisterActions.getAllRegisterByStatus(RegisterByStatusObj));
        }catch (error){
            console.error('Error fetching registerByStatus:', error);
        }
    }
}



export const handleUpdateStatus = (updateStatusObj) => {
    const {userId, itemIndex,updateStatus, currentStatus} = updateStatusObj;
    return async (dispatch) => {
        try{
            const response = await axios.patch("http://localhost:9001/admin/statusUpdate",updateStatusObj);
            handleGetAllRegisterByStatus(currentStatus);
        }catch (error){
            console.error('Error updating status:', error);
        }
    }
};


// export const handleCancelStatus = (cancelStatusObj)=> {
//     const {userId, itemIndex,status} = updateStatusObj;
//     return async (dispatch) => {
//         try{
//             const response = await axios.patch("http://localhost:9001/admin/cancelStatusUpdate",cancelStatusObj);
//             handleGetAllRegisterByStatus("pending");
//         }catch (error){
//             console.error('Error updating status:', error);
//         }
// }

export const handleSendEmail = (sendEmailObj) => {
    return async (dispatch) => {
        try{
            const respone = await axios.post("http://localhost:9001/admin/sendEmail", sendEmailObj)
        }catch (error){
            console.error('Error updating status:', error);
        }
    }
};