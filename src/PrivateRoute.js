import React, { useState, useEffect } from 'react';
import {Route, Navigate, Outlet, useNavigate} from 'react-router-dom';
import * as userService from "./services/userService"

function PrivateRoute(props){
    const [isAuth, setIsAuth] = useState(false);
    const [hasAuthed, setHasAuthed] = useState(false);
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    function checkAuth(data){
        if(data.data !== null){
            // console.log("in checkAuth, data = " + JSON.stringify(data));
            setIsAuth(true);
            setHasAuthed(true);
        }else{
            // console.log("in checkAuth, data = " + JSON.stringify(data));
            console.log("testttt");
            navigate("/Login");
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