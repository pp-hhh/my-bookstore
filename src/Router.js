import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import LoginRoute from "./LoginRoute";
import HomeView from "./View/HomeView";
import LogView from './View/LogView'
import {history} from "./utils/history";
import BookView from "./View/BookView";
import CartView from "./View/CartView";
import OrderView from "./View/OrderView";
import UserView from "./View/UserView";


function BasicRoute(props){
    history.listen((location, action) => {
        // clear alert on location change
        console.log(location,action);
    });



    return (
        <Router history={history}>
            <Routes>
                <Route path="/" element={<PrivateRoute />} >
                    <Route path="/" element={<HomeView />} />
                </Route>
                <Route path="/Login" element={<LoginRoute />}>
                    <Route path="/Login" element={<LogView />} />
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
        </Router>
    )
}

export default BasicRoute;