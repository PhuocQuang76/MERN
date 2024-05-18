import React, { Component } from "react";
import SuccessChild from "./SuccessChild";


export default class LifeCycleHooks extends Component{


    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        console.log("ComponentDidMount called");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate called");
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount called");
    }



    render(){
        return(
            <div>
                
            </div>
        );
    }
}