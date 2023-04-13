import React, { useState, useEffect } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import * as userService from "./services/userService"

function PrivateRoute(props){

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

    // const {component: Component, path="/",exact=false,strict=false} = props;


    if(!hasAuthed) return null;

    // return(<Route path={path} render={props => (
    //     isAuth ? (
    //         <Component {...props}/>
    //     ) : (
    //         <Navigate to={{
    //             pathname: '/Login',
    //             state: {from: props.location}
    //         }}/>
    //     )
    // )}/>)
    return (isAuth ? <Outlet /> : <Navigate to="/Login" />)
}

export default PrivateRoute;