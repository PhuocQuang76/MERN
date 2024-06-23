import React, { Component } from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Greeting from './components/Greeting';
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import NotFound from './components/NotFound';
import UserComponent from './Application/UserContainer';
import UseEffectHook from "./components/UseEffectHook";
import UserHook from "./Application/UserHookComponent";
import Student from "./Application/StudentComponent";
import AddProduct from "./Application/Product/AddProduct";


export default class App extends Component {
    //props (short for properties) are a way to pass data from a parent component 
    //to a child component. Props are read-only and can be accessed by the child 
    //component to render content or perform actions based on the provided data.

    //Props are passed to a child component as attributes when it is rendered 
    //within the parent component. Each prop has a name and a corresponding value.
    constructor(props){
        //it is necessary to call super(props) in the constructor to ensure that 
        //the parent class (in this case, the base class) is properly initialized.
        super(props); //syncs the props values to parent/base class
        //define the state and initialize the state
        this.state = {
            name : "Micheal!!!"
        }

    }

    updateName = (value)=>{
       
        //Not working without using React API
        // let nameElem = document.getElementById("name_element")
        // nameElem.innerText = "Yao"
        //nameElem.innerText = "David"


        // this.state.name = "Alieen"
        // console.log(this.state.name)

        //update state to create new virtual dom using setState - api
        this.setState({
            name : value
        })

        console.log(this.state.name)
        //evt.preventDefault();
    }

    render(){
        return(
           
            <Router>
                <div className="topdiv">
                    <Header userName={ this.state.name}/>
                    {/* <UseEffectHook /> */}
                    
                    <Routes>
                        {/* using updateNameInParent={this.updateName} to ask Home component update value name back here */}
                        <Route path="/" element={<Home  
                                                    parentName={this.state.name}
                                                    updateNameInParent={this.updateName} />}/>
                        <Route path="/home" element={<Home  
                                                    parentName={this.state.name}
                                                    updateNameInParent={this.updateName} />}/>
                        
                        <Route path="/user" element={<UserComponent />}/>
                        <Route path="/userHook" element={<UserHook />}/>
                        <Route path="/student" element={<Student />} />
                        <Route path="/product" element={<AddProduct />} />

                        <Route path="/about" element={<About />}/>
                        <Route path="/about/:id" element={<About />}/>
                        <Route path="*" element={<NotFound />}/>   
                    </Routes>

                    

                    <Footer/> 
                </div>
            </Router>

            
        )
    }


    /*

    render(){
        let name = "Suyash Talekar!!!"
        return(
            <div>
                <Greeting />
                <h4>This is main react application Component</h4>
                <h5><b id="name_element">{this.state.name}</b></h5>
                <hr/>
                <div>
                    <form>
                        <div className="col-md-6">
                            <label className="col-md-2">User Name</label>
                            <input className="col-md-4" type="text" maxLength={1} placeholder="Please type here user name..."></input>
                        </div>
                        <div className="col-md-6">
                            <label className="col-md-2">Email</label>
                            <input className="col-md-4" type="email" maxLength={10} placeholder="Please type here email..."></input>
                        </div>

                        <div className="col-md-6">
                            <label className="col-md-2">DOB</label>
                            <input className="col-md-6" type="date" maxLength={14} placeholder="Please type here telephone..."></input>
                        </div>

                        <div className="col-md-6 control-group">
                            <label className="col-md-2">Skills</label>
                            <div className="col-md-4 controls">
                                <label>Java</label>
                                <input type="checkbox" ></input>
                                <label>Python</label>
                                <input type="checkbox" ></input>

                            </div>
                            
                            
                        </div>
                    
                    <hr/>
                    </form>
                </div>

                <Home parentName={"Parent"}/>

                <Footer/>

                <button onClick={this.updateName}>Update Name</button>
            </div>
        )
    }

    */
}