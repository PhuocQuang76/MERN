//Create UserContainer is created to connect the UserComponent with the Redux store.
import { connect } from 'react-redux';
import UserComponent from './UserComponent';
import { AddUserToStore, UpdateUserName ,SaveUserToDB } from "../store/User/userAction";


let mapStateToProps = (state) => {
    return{
        user : state.user.user
    }
}


let mapDispatchToProps = (dispatch) => {
    return{
        addUser : (user) => {
            dispatch(AddUserToStore(user))
        },

        loginUser : (user)=>{
            dispatch(SaveUserToDB(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)