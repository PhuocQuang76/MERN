

import React ,{useState,useRef, useEffect} from "react";
import { useDispatch } from "react-redux";
import { handleUpdateStatus } from "../../store/AllRegister/AllRegister-actions";


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
        const updatedStatus = statusInputRef.current.value;
        const statusUpdateObj = {
            userId: selectedUserId,
            itemIndex: selectedItemIndex,
            updateStatus: updatedStatus,
            currentStatus:"pending"
        }
        
        // Add your logic to save the updated status
        dispatch(handleUpdateStatus(statusUpdateObj));
        setIsEditing(false);
    }
    

    useEffect(()=>{

    },[])
    return (
        <>
            <tr>
                <td>{item.userId}</td>
                <td>{item.itemIndex}</td>
                
   
                <td>
                    <table>
                        <tbody>
                            {item.item.vaccines && Array.isArray(item.item.vaccines) && (
                                item.item.vaccines.map((vaccineItem, index) => (
                                    <tr key={index}>
                                        <td>{vaccineItem.vaccine.name}</td>
                                        <td>{vaccineItem.vaccine.dose}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </td>

                

                <td>{item.item.hospitals.name}</td>
                <td>{item.item.hospitals.type}</td>
                <td>{item.item.appointmentDate}</td>
                <td>{item.item.appointmentTime}</td>
                <td>${item.item.amount}</td>
              
                
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