import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import LoginRoute from "./LoginRoute";
import HomeView from "./View/HomeView";
import LogView from './View/LogView'
import RegisterView from './View/RegisterView'
import BookView from "./View/userView/BookView"
import CartView from "./View/CartView";
import OrderView from "./View/OrderView";
import UserView from "./View/UserView";
import { ToastContainer } from 'react-toastify';
import StorageDetail from "./Components/admin/StorageDetail";
import StorageDetailView from "./View/adminView/StorageDetailView";
import OrdersView from "./View/adminView/OrdersView";
import UsersView from "./View/adminView/UsersView";
import DataView from "./View/adminView/DataView";
import BlankStorageDetailView from "./View/adminView/BlankStorageDetailView";
import OrderDataView from "./View/userView/OrderDataView";


function BasicRoute(props){
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
                <Route path="/OrderData" element={<PrivateRoute />}>
                    <Route path="/OrderData" element={<OrderDataView />} />
                </Route>
                <Route path="/Profile" element={<PrivateRoute />} >
                    <Route path="/Profile" element={<UserView />} />
                </Route>
                <Route path="/Storage/:id" element={<PrivateRoute />} >
                    <Route path="/Storage/:id" element={<StorageDetailView />} />
                </Route>
                <Route path="/Storage/add" element={<PrivateRoute />}>
                    <Route path="/Storage/add" element={<BlankStorageDetailView />}/>
                </Route>
                <Route path="/Orders" element={<PrivateRoute />}>
                    <Route path="/Orders" element={<OrdersView />}/>
                </Route>
                <Route path="/Users" element={<PrivateRoute />}>
                    <Route path="/Users" element={<UsersView />}/>
                </Route>
                <Route path="/Data" element={<PrivateRoute />}>
                    <Route path="/Data" element={<DataView />} />
                </Route>
            </Routes>
            <ToastContainer position='top-center'/>
        </Router>
    )
}

export default BasicRoute;