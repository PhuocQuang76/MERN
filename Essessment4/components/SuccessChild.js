import React from 'react';
import SuccessStory from './SuccessStory';

const SuccessChild = (props) => {

    const handleRandomValue = (value) => {
        props.updateNameInParent(value); // Pass the random value back to the Success component
    };


    return (
        <div>
            <h5 className="inline">Name:</h5>
            <p className="inline">{props.name}</p>
            <br></br>
            <h5 className="inline">Address: </h5>
            <p className="inline">{props.address}</p>
            <SuccessStory story="This is a success story." onRandomValue={handleRandomValue} />
        </div>
    );
};

export default SuccessChild;