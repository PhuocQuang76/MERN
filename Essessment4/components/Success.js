import React, { Component } from "react";
import SuccessChild from "./SuccessChild";


export default class Success extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Micheal",
            address: "Los Angeles",
            story : "Achieved great success against all odds.",
            randomValueInit: 100,
            successQuotes :[
                "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
                "Success is walking from failure to failure with no loss of enthusiasm.",
                "The road to success and the road to failure are almost exactly the same.",
                "Success usually comes to those who are too busy to be looking for it.",
            ]
        };
    }

    
    updateRandomValue = (value)=> {
        this.setState({
            randomValueInit : value
        })
       
    }

    render(){
        
        return(
            <div>
                <SuccessChild name={this.state.name} address={this.state.address} updateNameInParent={this.updateRandomValue}/>
                <h5 className="inline">Random Value:</h5>
                <p className="inline">{this.state.randomValueInit}</p>

                <hr></hr>
                <h4>Success Quotes</h4>
                <ul>
                    {this.state.successQuotes.map((quote,index) => (
                        <li key={index}>{ quote}</li>
                    ))}
                </ul>
            </div>
        );
    }
}