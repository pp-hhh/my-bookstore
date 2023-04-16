import React, { useState, useEffect } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import * as userService from "./services/userService"

function PrivateRoute(props){
    const [isAuth, setIsAuth] = useState(false);
    const [hasAuthed, setHasAuthed] = useState(false);

    function checkAuth(data){
        if(data.status >= 0){
            setIsAuth(true);
            setHasAuthed(true);
        }else{
            setIsAuth(false);
            setHasAuthed(true);
        }
    }

    useEffect(() => {
        userService.checkSession(checkAuth);
    });

    if(!hasAuthed) return null;

    return (isAuth ? <Outlet /> : <Navigate to="/Login"/>)
}

export default PrivateRoute;