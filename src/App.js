import "./App.css";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import BasicRoute from "./Router";
import { useEffect } from "react";

function App() {

    // useEffect(() => {
    //     const clearLocalStorage = () => {
    //         window.removeEventListener('beforeunload', clearLocalStorage);
    //         window.localStorage.clear();
    //     };
    //
    //     window.addEventListener('beforeunload', clearLocalStorage);
    //
    //     return () => {
    //         window.removeEventListener('beforeunload', clearLocalStorage);
    //     };
    // }, []);


    return <BasicRoute />
}

export default App;
