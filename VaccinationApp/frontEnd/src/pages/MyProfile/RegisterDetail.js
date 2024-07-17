

import React, { useState, useRef } from "react";
import { useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {handleUpdateStatus,handleDateTimeUpdate} from "../../store/Register/Register-actions";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import imageVaccine from '../../images/vaccine-image.jpg';

const RegisterDetail = ({ item, userId, currentStatus }) => {
    const user = useSelector((state)=> state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [dateInput, setDateInput] = useState(item.item.appointmentDate);
    const [timeInput, setTimeInput] = useState(item.item.appointmentTime);



    const dateInputRef = useRef(""); // Initialize with appointment date
    const timeInputRef = useRef(""); // Initialize with appointment time
    if (!item || !item.item.appointmentDate) {
        return null; // Return null or a placeholder component if the item or appointmentDate is undefined
    }

    const handleSaveClick = ()=> {
        // Update the date and time values
        setDateInput(dateInputRef.current.value);
        setTimeInput(timeInputRef.current.value);
        let dateTimeUpdateObj = {
            userId:userId,
            itemIndex:item.itemIndex,
            updateDate:dateInput,
            updateTime:timeInput,
            currentStatus:currentStatus
        }
        dispatch(handleDateTimeUpdate(dateTimeUpdateObj));
        setIsEditing(false); // Reset editing state
       
    }
    const handleEditClick = ()=> {
        setIsEditing(true);
    }

    const handleCancelClick = () => {
        let cancelItemObj = {
            userId:userId,
            itemIndex:item.itemIndex,
            updateStatus:"canceled",
            currentStatus:currentStatus

        }
        dispatch(handleUpdateStatus(cancelItemObj));
        setIsEditing(false); // Reset editing state
       
        
        
    }

    const downloadCertification = () => {
        const doc = new jsPDF();
        doc.addImage(imageVaccine, 'JPG', 0, 0, 500, 400);
    
        const title = "Vaccinated Certification";
        const padding = 8;
        const titleWidth = doc.getTextWidth(title);
        const center = (doc.internal.pageSize.width / 2) - (titleWidth / 2);
        doc.setTextColor('red');
        doc.text(title, center, padding);
    
        doc.setFont('Helvertica', 'bold');
        doc.text(20, 30, 'Name:');
        doc.text(20, 40, 'Age:');
        doc.text(20, 50, 'Email:');
        doc.text(20, 60, 'Hospital:');
        doc.text(20, 70, 'Date:');
        doc.text(20, 80, 'Time:');
        doc.text(20, 90, 'Vaccines-Dose:');
    
        doc.setFont('Helvertica', 'Normal');
        doc.text(60, 30, user.firstName.toString()+ " " + user.lastName.toString());
        doc.text(60, 40, user.age.toString()+ ' years old');
        doc.text(60, 50, user.email.toString());
        doc.text(60, 60, item.item.hospitals.name.toString());
    
        doc.text(60, 70, item.item.appointmentDate.toString());
        doc.text(60, 80, item.item.appointmentTime.toString());
    
        // Loop through vaccines array
        let yPos = 90;
        item.item.vaccines.forEach((vaccineItem, index) => {
            doc.text(60, yPos, `${vaccineItem.vaccine.name} - ${vaccineItem.vaccine.dose}`);
            yPos += 10; // Increase the vertical position for the next item
        });
    
        
        doc.save('demoPDF.pdf');
    }
    return(
        <>
            <tr>
                <td>{item.itemIndex}</td>
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

                
                <td>
                    {isEditing ? (
                        <input
                            type="date"
                            ref={dateInputRef}
                            value={dateInput} // Set initial value
                            onChange={(e) => setDateInput(e.target.value)} // Update state on change
                        />
                    ) : (
                        <span>{item.item.appointmentDate}</span>
                    )}
                </td>

                <td>
                    {isEditing ? (
                        <input
                            type="time"
                            ref={timeInputRef}
                            value={timeInput} // Set initial value
                            onChange={(e) => setTimeInput(e.target.value)} // Update state on change
                        />
                    ) : (
                        <span>{item.item.appointmentTime}</span>
                    )}
                </td>



                <td>${item.item.amount}</td>
                <td>{item.item.status}</td>
                
                
                 <td>
                    {
                        item.item.status === "pending" || item.item.status === "accepted"? (
                            <>
                              {isEditing ? (
                                <button onClick={handleSaveClick}>Save</button>
                            ) : (
                                <button onClick={handleEditClick}>Edit</button>
                            )}
                                <button onClick={handleCancelClick}>Cancel</button>
                            </>
                        ):(
                            ""
                        )
                    }

                    {
                        item.item.status === "vaccinated" ? (
                            <button onClick={downloadCertification}>Download</button>
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