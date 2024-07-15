import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllUsers } from "../../store/Auth/auth-action";
import UserDetail from "./UserDetail";
import classes from "./UserList.module.css"

const UserList = () => {
    const dispatch = useDispatch();
    
    const users = useSelector((state) => state.auth.users);
   
    useEffect(() => {
         dispatch(handleGetAllUsers());
    }, [dispatch]);

    return (
        <div className={classes.userList}>
            <h2>List Of Users</h2>
            {users && users.length >= 1 ? (
                users.map((user,index) => <UserDetail key={index} user={user} />)
            ) : (
                <h5>No users</h5>
            )}
            <hr></hr>
        </div>
    );
};

export default UserList;

