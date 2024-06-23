import React, { Component } from "react";
// import {io} from 'socket.io-client';

//import { connect } from "react-redux";
//import { AddUserToStore } from "../../../store/User/userAction";


class User extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            userName : props.user.userName, // we need to read from store using props through container
            password : props.user.password,
            street : props.user.street,
            mobile : props.user.mobile,
            isLogin: false
            // socket: null
            

            // userName : "AIleen", // we need to read from store using props through container
            // password : "123443",
            // street : "ABS",
            // mobile : "12131"

            
        }
    }

    onTextChange = (evt)=>{
        let target = evt.target;
        let classList = target.classList;//reading the class name of html when change event happens
        let value = target.value;
    
        if(classList.contains("username")){
            this.setState({ userName : value })
        }else if (classList.contains("pass")) {
            this.setState({ password : value })
        } else if (classList.contains("street")) {
            this.setState({ street : value })
        } else {
            this.setState({ mobile : value })
        }    

        evt.preventDefault();
    }

    loginUser = (evt)=>{        
        let newUser = this.state;
        let userId = newUser._id;
        newUser.isLogin = true;
        

        // Emit the user details to the socket server
        // if (this.state.socket) {
        //     this.state.socket.emit("addNewUser", { userId, socketId: this.state.socket.id });
        // }
        
        //upon user action to login we send user to store
        //this.props.addUser(newUser);
       
        console.log("this.state.userName:"+this.state.userName)

        this.props.loginUser(newUser) //will go to usercontainer => useraction => server(db) => store => userreducer
        //this.props.getCart(userId)
        

        // After dispatching the action to update the store, reset the input fields
        this.setState({
            userName: '',
            password: '',
            street: '',
            mobile: '',
             // Update isLogin state to true after successful login
        });

       // After successful login, navigate to /home
      

       evt.preventDefault();
    }

    componentDidMount() {
        // const socket = io("http://localhost:9001");
        // this.setState({ socket });
    }
    

    render(){
        return(
            <div id="user_login">
                <h1>Login</h1>
                <section>
                    <div>
                        <label>User Name</label>
                        <input type="text" className="form-control col-md-6 username" 
                                value={this.state.userName} 
                            placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
                    </div>

                    <div className="col-md-12">
                            <label>Password</label>
                            <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                            placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                    </div>

                    <div className="col-md-12">
                    <b>Street </b>
                        <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                                placeholder="Street Name" onChange={this.onTextChange} />
                    </div>
                
                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                        placeholder="Mobile" maxLength="11"
                        onChange={this.onTextChange} />
                    </div>
                    <div>
                        <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                            value={"SignIn-Up"} 
                            onClick={this.loginUser}/>                      
                    </div>

                </section>
            </div> 
        )
    }
}

export default User;

/*
In the provided code, 
UserContainer is created to connect the UserComponent with the Redux store.

The purpose of the container component is to 
subscribe to the Redux store and map the store state to props, as well as dispatch 
actions to update the store.
*/

//mapstatetoprops -- allows component to become subscriber

// let mapStateToProps = (store) => { //store is the redux states
//     return {
//         user : store.userReducer.user
//     //user - will be accessed as props.user in component
//     }
// }

// //mapDispatchToProps -- allows us to send data back to store to update in reducer
// let mapDispatchToProps = (dispatch)=>{
//     return {
//         addUser : (user)=>{
//             dispatch(AddUserToStore(user))
//         }
//     }
// }


// //connect accepts - mapStateToProps - for subscribing and mapDispatchToProps - for publishing
// export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)