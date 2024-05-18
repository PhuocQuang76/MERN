import React, { Component, PureComponent } from "react";

//this component implements shouldComponentUpdate in itself to reduce the render on state change
export default class Home extends PureComponent {

// export default class Home extends Component {

    //creation life cycle method
    constructor(props){

        super(props)

        this.state = {
            age : 17,
            userName : "Default",
            refAddress : "Somewhere on earth",
            refAge : "Infinity"
        }

        this.incrementAgeLoop = null;
        this.incrementAgeVal = 17;
        this.incrementAge();

        //to access and update the html directly
        this.address = React.createRef() //this creates a reference which we link with html and then access it
        this.age = React.createRef()
        this.myRef = React.createRef();
        //this.mysaveRef = "myref default"; 
        // this.mysaveRef to a string value "my ref default" in the constructor, but later in the saveRef method, you are assigning this.myRef to this.mysaveRef. This can lead to unexpected behavior because you are changing the type of this.mysaveRef from a string to a ref object.

        // To fix this issue, you should ensure that this.mysaveRef remains consistent in type throughout your component. If you intend for mysaveRef to hold a reference to an element, you should initialize it as null
        this.mysaveRef = null;
    }

    saveRef = ()=>{
        // Save this.myRef to mysaveRef
        this.mysaveRef = this.myRef;
        console.log(this.mysaveRef);
        this.forceUpdate(); // Update the component to reflect the changes
    }


    incrementAge = ()=>{

        // this.incrementAgeLoop = setInterval(()=>{ //continous loop
        //     this.incrementAgeVal++
        //     this.setState({
        //         age : this.incrementAgeVal
        //     })

        //     console.log(this.incrementAgeVal)
        // }, 2000) //runs every  2 seconds forever - unless cleared

        // setTimeout(()=>{
        //     clearInterval(this.incrementAgeLoop)
        // },5000)
    }

    //html is rendered on browser, executes only after the first render
    componentDidMount(){
        //we can access the html and make calls to server API here to pull the data
        this.myRef.current.value = "I am myref"; 

        setTimeout(()=>{
            this.address.current.value = "New name with reference"
        },2000)
    }

 

    //destruction life cycle method
    componentWillUnmount(){
        //any api subsriptions, loops should be stopped here as this data may create mess
        console.log("componentWillUnmount - is called")
        clearInterval(this.incrementAgeLoop)
    }

    //evt -is js object which contain information about the control which invoked this event
    onTextChange = (evt)=>{
        let element = evt.target
        let value = element.value;

        let classList = element.classList

        if (classList.contains("userName")) {
            //regex to check the email
            //value == valid email
            this.setState({
                userName : value
            })
        } else {
            //regex to check the number
            let newVal = value < 110 ? value : 0

            this.setState({
                age : newVal
            })
        }
        
        console.log(value)
        
        //update the name back in parent by calling callback event
        this.props.updateNameInParent(value)//sending data back to parent
        
        evt.preventDefault() //will explain in detail
    }

    updateName = (evt)=>{
        console.log("Updating the nameto age!!")
        this.setState({
            age : this.state.userName
        })

        evt.preventDefault()
    }

    // do not implement this if in pure component update life cycle methods
    // shouldComponentUpdate(nextPops, nextState){
    //     console.log("nextPops ", nextPops)
    //     console.log("nextState ", nextState)

    //     if (this.state.age == nextState.userName ) {
    //         return false // should not call render method to create virtual dom
    //     } else {
    //         return true // keep calling render method     
    //     }
    // }

    // getSnapshotBeforeUpdate(prevState, prevProps){
    //     console.log("getSnapshotBeforeUpdate");
    //     console.log("prevState", prevState);
    //     console.log("prevProps", prevProps);
    //     return {
    //         prevState,
    //         prevProps
    //     }
    //     // return true;
    // }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);

        // this.setState({
        //     uState : prevState.uState
        // })
    }

    
    formSubmit = (evt)=> {
        this.address.current.focus()
        let newAdd = this.address.current.value
        let newAge = this.age.current.value;
        alert(newAdd + newAge)

        this.setState({
            refAge : newAge,
            refAddress : newAdd
        })
        evt.preventDefault()
    }


    //create and update the virtual DOM
    render(){
        console.log("render method called")
        return(
            <div className="col-md-12">
                <h1>Home Component</h1>
                <p>{this.props.parentName}</p>
                <h2>User Age is {this.state.age} </h2>

                {/* controlled way of creating component - state directly coupled with changes*/}
                <h3>INPUT</h3>
                <div className="form col-md-12">
                    <div className="form-control">
                    <div className="col-md-3">
                            <b>User Name</b>
                        </div>
                        <div className="col-md-7">
                            <input type="text" className="form-control textbox userName" value={this.state.userName}
                                placeholder="Please provide user name" onChange={this.onTextChange}></input>
                        </div>
                        <div className="col-md-7">
                            <input type="text" className="form-control textbox userAge" value={this.state.age}
                                placeholder="Please provide user age" onChange={this.onTextChange}></input>
                        </div>

                        <div className="col-md-3">
                        <button className={"form-control btn btn-primary col-md-1"} 
                            onClick={this.updateName} 
                        >Update Name to Age</button>
                        </div>
                    </div>
                </div>

                
                <input type="text" ref={this.myRef}/>
                {/* //To display the value of the input element referenced by this.mysaveRef, you need to access 
                //the value property of the input element.

                //To fix this issue, you should update the render method to correctly display 
                //the value of the input element when this.mysaveRef is not null. */}
                <p>{this.mysaveRef && this.mysaveRef.current.value}</p> {/* Display input value */}
                <button onClick={this.saveRef}>Save Ref</button>


                <h3>FORM</h3>
                <form className="form" action="/api/loginuser" method="post" onSubmit={this.formSubmit}>
                     <b>Address</b>
                     <input type="text" placeholder={"Default User Address"} 
                         ref={this.address} maxLength={20}></input>
                    <b>Age</b>
                     <input type="number" placeholder={"Default User Age"} 
                         ref={this.age} maxLength={20}></input>

                    
{/* Should write this way instead */}
                    {/* <input type="text" placeholder={"Default User Age"} 
                         ef={(input) => this.age = input} maxLength={20}></input> */}


                     <button type="submit" >submit</button>
                </form>

                <label>{this.state.refAddress}</label>
                <hr/>
                <label>{this.state.refAge}</label>
            </div>
        )
    }

}

// Home.defaultProps = {
//     parentName : "Joe si!!"
// }

//gives the warning if we set it to required
// Home.propTypes = {
//     parentName : PropTypes.string.isRequired
// }

//class component 
//life cycle methods