import React, {useEffect, useState} from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import * as userService from "./services/userService";

function LoginRoute(props) {
    const [isAuth, setIsAuth] = useState(false);
    const [hasAuthed, setHasAuthed] = useState(false);

    function checkAuth(data){
        if(data !== null){
            console.log("in login route");
            setIsAuth(true);
            setHasAuthed(true);
        }else{
            setIsAuth(false);
            setHasAuthed(true);
        }
    }

    useEffect(() => {
        // console.log("login check session");
        userService.checkSession(checkAuth);
    }, []);


    if(!hasAuthed) return null;

    return (isAuth ? <Navigate to="/" /> : <Outlet />)
}

export default LoginRoute;