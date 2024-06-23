//Create UserContainer is created to connect the UserComponent with the Redux store.
import { connect } from 'react-redux';
import UserComponent from './UserComponent';
import { AddUserToStore,UpdateUserName,SaveUserToDB } from '../../store/User/userAction';
import {GetCardFromDBByUserId} from '../../store/Cart/cart-actions';

let mapStateToProps = (state) => {
    return{
        user : state.user.user,
        isLogin: state.user.isLogin
    }
}


let mapDispatchToProps = (dispatch) => {
    return{
        // addUser : (user) => {
        //     dispatch(AddUserToStore(user))
        // },

        

        loginUser : (user)=>{
            const isLogin = user.isLogin;
            dispatch(SaveUserToDB(user))
        }

        // getCart : (userId) => {
        //     dispatch(GetCardFromDBByUserId(userId))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)