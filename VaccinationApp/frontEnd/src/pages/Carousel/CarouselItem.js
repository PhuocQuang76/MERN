import React from "react";
import { useNavigate } from "react-router-dom";

export default function CarouselItem(props) {
    const navigate = useNavigate();
    const handleSelectVaccine = () => {
        navigate("/register");
    }

    // Extract the first and second items from the age array
    const firstAge = props.age && props.age.length > 0 ? props.age[0] : "";
    const secondAge = props.age && props.age.length > 1 ? props.age[1] : "";

    // Initialize ageDisplay with let instead of const
    let ageDisplay;

    // Conditionally format the age display based on the first item
    if (firstAge === ">") {
        ageDisplay = firstAge + secondAge;
        
    } else {
        ageDisplay = secondAge ? `${firstAge} - ${secondAge}` : firstAge;
    }

    return (
        <div className="card">
            <img className="product--image" src={props.images} alt="product image" />
            <h4 className="card-name">{props.name}</h4>
            <p className="price">${props.price}</p>
            <p className="card-desc">{props.description}</p>
            <p className="card-item">Age : {ageDisplay}</p>
            <p className="card-item">Dose : {props.dose}</p>
            
            <p>
                <button className="btn btn-primary" onClick={handleSelectVaccine}>Select</button>
            </p>
        </div>
    );
}