import React, { useState, useEffect } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import * as userService from "./services/userService"
import {defaultUser} from "./Data/User";

function PrivateRoute(props){
    const [isAuth, setIsAuth] = useState(false);
    const [hasAuthed, setHasAuthed] = useState(false);
    const [user, setUser] = useState({});

    function checkAuth(data){
        if(data.status >= 0){
            // console.log("in checkAuth, data = " + JSON.stringify(data));
            setIsAuth(true);
            setHasAuthed(true);
            // console.log("in checkAuth, data.data = " + JSON.stringify(data.data));
            // const { username, email, password, role, avatar, notes } = JSON.parse(JSON.stringify(data.data));
            // const updatedUser = {
            //     username: username,
            //     email: email,
            //     password: password,
            //     role: role,
            //     avatar: avatar,
            //     notes: notes
            // };
            // setUser({
            //     ...user,
            //     [username]: updatedUser[username],
            //     [email]: updatedUser[email],
            //     [password]: updatedUser[password],
            //     [role]: updatedUser[role],
            //     [avatar]: updatedUser[avatar],
            //     [notes]: updatedUser[notes]
            // })
            // console.log("in checkAuth, user = " + JSON.stringify(user));
            // setUser(JSON.stringify(data.data));
            // props.setUserInfo(JSON.stringify(data.data));
        }else{
            setIsAuth(false);
            setHasAuthed(true);
        }
    }

    useEffect(() => {
        userService.checkSession(checkAuth);
    }, []);

    if(!hasAuthed) return null;

    return (isAuth && hasAuthed ? <Outlet /> : <Navigate to="/Login"/>)
}

export default PrivateRoute;