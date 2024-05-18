import React, { Component } from "react";
import { BrowserRouter as Router, Routes ,Route, Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import './App.css';

import Success from "../components/Success";
import UserSignIn from "../components/UserSignIn";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SuccessChild from "../components/SuccessChild";
import SuccessStory from "../components/SuccessStory";


export default class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <div className="bodyDiv">

                <Routes>
                    <Route path="/" element={<UserSignIn />}/>
                    <Route path="/usersignin" element={<UserSignIn />}/>
                    <Route path="/success" element={<Success />}/>
                    {/* <Route path="/success_child" element={<SuccessChild />}/>
                    <Route path="/success_story" element={<SuccessStory />}/> */}
                                   
                </Routes>

                </div>

                <Footer />

            </Router>
        );
    }
}

