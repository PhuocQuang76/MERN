import React, { Component } from "react";

export default class UserSignIn extends Component {
    constructor(props) {
        super(props); // Add super(props) to the constructor

        this.state = {
            refUsername: "",
            refPassword: ""
        }

        this.username = React.createRef();
        this.password = React.createRef();
    }

    formSubmit = (evt) => {
        evt.preventDefault(); // Prevent default form submission behavior
        this.username.current.focus();

        let signInUsername = this.username.current.value;
        let signInPassword = this.password.current.value;

     
            this.setState({
                refUsername: signInUsername,
                refPassword: signInPassword
            });
        
        

        // You had 'newAdd + newAge' in the alert, consider revising that line for correct usage
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.refUsername !== this.state.refUsername || nextState.refPassword !== this.state.refPassword){
            console.log("updated...")
            return true;
        }else{
            return false;
        }
        // console.log("updated...")
        // return nextState.refUsername !== this.state.refUsername || nextState.refPassword !== this.state.refPassword;
    }
    
    render() {
        return (
            <div id="SignIn">
                <form className="form" action="/api/loginuser" method="post" onSubmit={this.formSubmit}>
                    <h5>UserName</h5>
                    <input type="text" placeholder="Input username here" ref={this.username} maxLength={20} />

                    <h5>Password</h5>
                    <input type="password" placeholder="Input password here" ref={this.password} maxLength={20} />
                    <br></br>
                    <br></br>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>

                
                <div >
                    <h5>Sign_In info:</h5>
                    <label>{this.state.refUsername}</label>
                    <label>:</label>
                    <label>{this.state.refPassword}</label>
                </div>
                    
            </div>
        );
    }
}