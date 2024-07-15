

import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {handleUpdateStatus} from "../../store/Register/Register-actions";

const RegisterDetail = ({ item, userId, currentStatus }) => {
  
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (!item || !item.item.appointmentDate) {
        return null; // Return null or a placeholder component if the item or appointmentDate is undefined
    }
    // const [amount, setAmount] = useState(0);

    // const totalAmount = () => {
    //     let calculatedAmount = 0;
    //     item.array.forEach(element => {
    //         element.array.forEach(e => {
    //             calculatedAmount += e.price;
    //         });
    //     });
    //     setAmount(calculatedAmount);
    // }
    
    const handleEditClick = ()=> {

    }

    const handleCancelClick = () => {
        let cancelItemObj = {
            userId:userId,
            itemIndex:item.itemIndex,
            updateStatus:"canceled",
            currentStatus:"cancel"

        }
        dispatch(handleUpdateStatus(cancelItemObj));
        navigate("/profile")
        
    }

    return(
        <>
            <tr>

            <td>
    {item.item.vaccines && Array.isArray(item.item.vaccines) && (
        <table>
            <tbody>
                {item.item.vaccines.map((vaccineItem, index) => (
                    <tr key={index}>
                        <td>{vaccineItem.vaccine && vaccineItem.vaccine.name}</td>
                        <td>{vaccineItem.vaccine.dose}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}
</td>

                <td>
                    {item.item.vaccines && Array.isArray(item.item.vaccines) && (
                        <table>
                            <tbody>
                                {item.item.vaccines.map((vaccineItem, index) => (
                                    <tr key={index}>
                                        <td>
                                            {vaccineItem.vaccine.age.map((age, ageIndex) => (
                                                <span key={ageIndex}>
                                                    {age}
                                                    {/* Add "-" if not the last age item */}
                                                    {ageIndex < vaccineItem.vaccine.age.length - 1 && "-"}
                                                </span>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </td>

                     
                <td>{item.item.hospitals.name}</td>
                <td>{item.item.hospitals.type}</td>
                <td>{item.item.appointmentDate}</td>
                <td>{item.item.appointmentTime}</td>
                <td>${item.item.amount}</td>
                <td>{item.item.status}</td>
                
                
                 <td>
                    {
                        item.item.status === "pending" || item.item.status === "accepted"? (
                            <>
                                <button onClick={handleEditClick}>Edit</button>
                                <button onClick={handleCancelClick}>Cancel</button>
                            </>
                        ):(
                            ""
                        )
                    }
                </td>
                {/* <td>
                    
                    {
                        item.item.status === "pending" || item.item.status === "accepted"? (
                            <button onClick={handleCancelClick}>Cancel</button>
                        ):(
                            ""
                        )
                    }
                    
                </td> */}

            </tr>
            


        </>
    )
}

export default RegisterDetail;