
// const { sign, verify } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
// const { compare } = require('bcryptjs');
// const { NotAuthError } = require('./errors');

const KEY = 'supersecret';


//Create a toke expire in 1h
// const createJSONToken = (res, userId) => {
//     return sign({userId},KEY, { expiresIn: '1h' });
// }


const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, KEY, { expiresIn: '1h' });
    console.log("Generated Token:", token);
    

    // Set jwt as cookie
    res.cookie("jwt", token, {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });
};

module.exports = { generateToken };






import React ,{useState,useRef, useEffect} from "react";
import { handleUpdateStatus } from "../../store/Register/Register-actions";
import { useDispatch } from "react-redux";

const AllRegisterDetail = ({item}) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
   


    const statusInputRef = useRef(null);

    const handleEditClick = (userId, itemIndex) => {
        setIsEditing(true);
        setSelectedUserId(userId);
        setSelectedItemIndex(itemIndex);
       
    }

    const handleSaveClick = () => {
        setIsEditing(false);
        const updatedStatus = statusInputRef.current.value;
        const statusUpdateObj = {
            userId: selectedUserId,
            itemIndex: selectedItemIndex,
            status: updatedStatus
        }
        
        // Add your logic to save the updated status
        dispatch(handleUpdateStatus(statusUpdateObj));
        
    }
    

    useEffect(()=>{

    },[isEditing])
    return (
        <>
            <tr onClick={() => handleEditClick(item.userId, item.itemIndex)}>
                <td>{item.userId}</td>
                <td>{item.itemIndex}</td>
                <td>{item.item.appointmentDate}</td>
                <td>{item.item.appointmentTime}</td>
   
                <td>
                    {item.item.vaccines && Array.isArray(item.item.vaccines) && (
                        <table>
                            <tbody>
                                {item.item.vaccines.map((vaccineItem, index) => (
                                    <tr key={index}>
                                        <td>{vaccineItem.vaccine.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </td>
                    
                <td>
                    <table>
                        <tbody>
                            {item.item.vaccines && Array.isArray(item.item.vaccines) && 
                                item.item.vaccines.map((vaccineItem, index) => (
                                    <tr key={index}>
                                        <td>{vaccineItem.vaccine.dose}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </td>

                <td>{item.item.hospitals.name}</td>
                <td>{item.item.hospitals.type}</td>
                   
                <td>
                    {
                        isEditing?(
                            <input 
                            type="text" 
                            
                            ref={statusInputRef} 
                        />
                        ):(
                            <span>{item.item.status}</span>
                        )
                    }
                    
                    
                    
                    
                    
                </td>
                
                <td>
                    {item.item.status === "pending" && (
                        <>
                            {   
                                isEditing ? (
                                    
                                    <button onClick={handleSaveClick}>Save</button>
                                    
                                ) : (
                                    <button onClick={() => handleEditClick(item.userId, item.itemIndex)}>Edit</button>
                                )
                            }
                        </>
                       
                    )}
                </td>
               
            </tr>
        </>
    );
}

export default AllRegisterDetail;