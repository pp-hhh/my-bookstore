import React, {useEffect, useState} from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import * as userService from "./services/userService";

function LoginRoute(props) {
    const [isAuth, setIsAuth] = useState(false);
    const [hasAuthed, setHasAuthed] = useState(false);

    function checkAuth(data){
        if(data.message === "OK"){
            setIsAuth(true);
            setHasAuthed(true);
        }else{
            setIsAuth(false);
            setHasAuthed(true);
            localStorage.removeItem("user");
        }
    }

    useEffect(() => {
        userService.checkSession(checkAuth);
    }, []);


    // const { component: Component, path = "/", exact = false, strict = false } = props;

    if(!hasAuthed) return null;

    // return (<Route path={path} render={props => (
    //     isAuth ? (
    //         <Navigate to={{
    //             pathname: '/',
    //             state: {from: props.location}
    //         }}/>
    //     ) : (
    //         <Component />
    //     )
    // )}/>)
    return (isAuth ? <Navigate to="/" /> : <Outlet />)
}

export default LoginRoute;