import React from 'react';

const SuccessStory = (props) => {
    const generateRandomValue = () => {
        const randomValue = Math.floor(Math.random() * 100); // Generate a random value
        props.onRandomValue(randomValue); // Pass the random value back to SuccessChild component
    }

    return (
    <div>
        <h5 className="inline">Success Story:</h5>
        <p className="inline">{props.story}</p>
        <br></br>
        <br></br>
        <button className="btn btn-info" onClick={generateRandomValue}>Generate Random Value</button>
    </div>
    );
};

export default SuccessStory;