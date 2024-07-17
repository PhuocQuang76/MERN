



import React, { useEffect, useState } from "react";



import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getAllVaccines } from '../../store/Vaccine/Vaccine-actions';
import { addRegisterToDB, handleSendEmail} from '../../store/Register/Register-actions';

import VaccineDetail from "../Vaccine/VaccineDetail";
import HospitalDetail from "../Hospital/HospitalDetail";
import { getAllHospitals } from "../../store/Hospital/Hospital-actions";
import classes from "./Register.module.css";
// import  '../../common/QRCode/CustomQRCode.css';
import CustomQRCode  from "../../common/QRCode/CustomQRCode ";

const Register = () => {
    const vaccines = useSelector((store) => store.vaccine.vaccines);
    const hospitals = useSelector((store) => store.hospital.hospitals);
   
    const user = useSelector((store) => store.auth.user);
    const userId= user._id;
    const userName=user.firstName;
    const email = "aileensession55@gmail.com";

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedVaccines, setSelectedVaccines] = useState([]);
    const [selectedHospital, setSelectedHospital] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [vaccineTotal, seVaccineTotal] = useState(0);
    const [hospitalTotal, setHospitalTotal] = useState(0);
    const [forceRerender, setForceRerender] = useState(false);


    const userAge = user.age;

    const handleAgeCheck = (userAge) => {
        let check = true;

        for (let vaccine of selectedVaccines) {
            if(vaccine.age[0] === "all"){
                console.log("No limit age");
            }
            else if (vaccine.age[0] === ">" && userAge > vaccine.age[1]) {
                console.log(`User is eligible for the vaccine with age limit > ${vaccine.age[1]}`);
            } else if (vaccine.age[1] === null && userAge === vaccine.age[0]) {
                console.log(`User is eligible for the vaccine with age ${vaccine.age[0]}`);
            } else if (userAge >= vaccine.age[0] && userAge <= vaccine.age[1]) {
                console.log(`User is eligible for the vaccine with age range ${vaccine.age[0]} - ${vaccine.age[1]}`);
            } else {
                console.log(`User is not eligible for this vaccine`);
                check = false; // Set check to true for vaccines outside the age range
            }
        }

        if (!check) {
            console.log("User is not eligible for any of the selected vaccines");
        }

        return check; // Return false if any vaccine is outside the age range
    }



    const handleVaccineSelection = (selectedVaccine) => {
        let itemIndex = 0;
        let updatedVaccines = [];
        let total = 0;
    
        if (selectedVaccines.some(vaccine => vaccine._id === selectedVaccine._id)) {
            updatedVaccines = selectedVaccines.filter(vaccine => vaccine._id !== selectedVaccine._id);
        } else {
            updatedVaccines = [...selectedVaccines, selectedVaccine];
        }
    
        updatedVaccines.forEach(vaccine => {
            total += vaccine.price; // Assuming each vaccine object has a 'price' property
        });
    
        setSelectedVaccines(updatedVaccines);
        seVaccineTotal(total);
        
    };

    const handleHospitalSelection = (selectedHospital) => {
        let total = 0;
        setSelectedHospital(selectedHospital);
        total = selectedHospital.charge;
        setHospitalTotal(total);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const paymentObj = {
        "userId":userId,
        // "Vaccines":vaccines,
        // "hospital":hospitals,
        // "vaccineCharge":vaccineTotal,
        // "hospitalCharge":hospitalTotal,
        "total":vaccineTotal+hospitalTotal,
        "date":selectedDate,
        "time":selectedTime
    }

    const registerConfirm = () => {
        if (Object.keys(user).length === 0) {
            navigate("/auth/login");
        } else {
            if (selectedVaccines.length === 0 || selectedHospital === "" || selectedDate === "" || selectedTime === "") {
                alert("Please select all data");
            }else {
                let check = handleAgeCheck(userAge);
                if (check) {
                    
                    let newItem = {
                        userId: userId,
                        item: {
                            vaccines: selectedVaccines.map((vaccine, index) => ({ vaccine, index: index + 1 })), // Adding the index to each vaccine
                            hospitals: selectedHospital,
                            appointmentDate: selectedDate,
                            appointmentTime: selectedTime,
                            amount: vaccineTotal + hospitalTotal,
                            status: "pending"
                        }
                    };

                    dispatch(addRegisterToDB(newItem));


                    let sendEmailObj = {
                        email:email,
                        emailObj:{
                            userName:userName,
                            hospital: selectedHospital.name,
                            date:selectedDate,
                            time:selectedTime
                        }
                    }
                    dispatch(handleSendEmail(sendEmailObj));

                    setForceRerender(prev => !prev);
                } else {
                    alert("Please select the correct vaccine");
                    return;
                }
            }
            navigate("/profile");
        }

    };

    useEffect(() => {
        dispatch(getAllVaccines());
        dispatch(getAllHospitals());
    }, []);

    useEffect(() => {
        // Your logic here that you want to trigger a re-render
    }, [forceRerender]);

    return (
        <div className={classes.userRegister}>
            <h2>Register Vaccination Center</h2>

            <h3>Select Vaccine</h3>
            {vaccines.map((vaccineItem) => (
                <div key={vaccineItem._id}>
                    <input
                        type="checkbox"
                        id={vaccineItem._id}
                        name="vaccine"
                        value={vaccineItem._id}
                        onChange={() => handleVaccineSelection(vaccineItem)}
                    />
                    <VaccineDetail vaccine={vaccineItem}/>
                </div>
            ))}
            <h3>Select Hospital</h3>
            {hospitals.map((hospitalItem) => (
                <div key={hospitalItem._id}>
                    <input
                        type="radio"
                        id={hospitalItem._id}
                        name="hospital"
                        value={hospitalItem._id}
                        onChange={() => handleHospitalSelection(hospitalItem)}
                    />
                    <HospitalDetail hospital={hospitalItem}/>
                </div>
            ))}

            <h4>Select Date</h4>
            <input type="date" value={selectedDate} onChange={handleDateChange} />

            <h4>Select Time</h4>
            <input type="time" value={selectedTime} onChange={handleTimeChange} />

            <div className={classes.amount}>
                <h3>Charge Total</h3>
                <p>Vaccines charge: ${vaccineTotal}</p>
                <p>Hospital charge: ${hospitalTotal}</p>
                
                <p>Total: ${vaccineTotal + hospitalTotal}</p>
                <button className="btn btn-primary" onClick={registerConfirm}>Pay</button>
                <div className="qrCode">
           
                    <CustomQRCode paymentObj={paymentObj} />
    

                </div>
            </div>

           


            

            
        </div>
    )
}

export default Register;