import React, { useState, useEffect } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import * as userService from "./services/userService"

function PrivateRoute(props){
    const [isAuth, setIsAuth] = useState(false);
    const [hasAuthed, setHasAuthed] = useState(false);
    const [user, setUser] = useState({});

    function checkAuth(data){
        if(data !== null){
            // console.log("in checkAuth, data = " + JSON.stringify(data));
            setIsAuth(true);
            setHasAuthed(true);
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