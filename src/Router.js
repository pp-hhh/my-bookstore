import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import LoginRoute from "./LoginRoute";
import HomeView from "./View/HomeView";
import LogView from './View/LogView'
import RegisterView from './View/RegisterView'
import BookView from "./View/BookView";
import CartView from "./View/CartView";
import OrderView from "./View/OrderView";
import UserView from "./View/UserView";
import { ToastContainer } from 'react-toastify';
import {defaultUser} from "./Data/User";


function BasicRoute(props){

    // const [user, setUser] = useState(defaultUser);
    //
    // function updateUser(user_data) {
    //     const { username, email, password, role, avatar, notes } = JSON.parse(user_data);
    //     console.log("after parse: " + username);
    //     const updatedUser = {
    //         username: username,
    //         email: email,
    //         password: password,
    //         role: role,
    //         avatar: avatar,
    //         notes: notes
    //     };
    //     setUser({
    //         ...user,
    //         [username]: updatedUser[username],
    //         [email]: updatedUser[email],
    //         [password]: updatedUser[password],
    //         [role]: updatedUser[role],
    //         [avatar]: updatedUser[avatar],
    //         [notes]: updatedUser[notes]
    //     })
    //     console.log("after update: " + JSON.stringify(user));
    // }


    return (
        <Router>
            <Routes>
                <Route path="/" element={<PrivateRoute />} >
                    <Route path="/" element={<HomeView />} />
                </Route>
                <Route path="/Home" element={<PrivateRoute />} >
                    <Route path="/Home" element={<HomeView />} />
                </Route>
                <Route path="/Login" element={<LoginRoute />}>
                    <Route path="/Login" element={<LogView/>} />
                </Route>
                <Route path="/Register" element={<LoginRoute />}>
                    <Route path="/Register" element={<RegisterView />} />
                </Route>
                <Route path="/Book/:id" element={<PrivateRoute />} >
                    <Route path="/Book/:id" element={<BookView />} />
                </Route>
                <Route path="/Cart" element={<PrivateRoute />} >
                    <Route path="/Cart" element={<CartView />} />
                </Route>
                <Route path="/Order" element={<PrivateRoute />} >
                    <Route path="/Order" element={<OrderView />} />
                </Route>
                <Route path="/Profile" element={<PrivateRoute />} >
                    <Route path="/Profile" element={<UserView />} />
                </Route>
            </Routes>
            <ToastContainer position='top-center'/>
        </Router>
    )
}

export default BasicRoute;