import React, { Component } from "react";
import './Greeting.css';
// import logo from '../../assets/resource/logo.svg';
// import logo from '../../assets/resource/logo.svg';
import logo from '../.././assets/resource/logo.svg';

export default class ApplicationComponent extends Component {

    render(){
        let name = "Suyash Talekar!!!"
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}