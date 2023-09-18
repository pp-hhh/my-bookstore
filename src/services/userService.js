// import config from 'config';
// import config from 'config';
import {loginRequest, postRequest, postRequest_v3} from "../utils/ajax";
import { toast } from "react-toastify";


const default_url = "http://localhost:8080";

export const login = (data, callback) => {
    return new Promise((resolve, reject) => {
        const url = default_url + `/Login`;
        postRequest(url, data, callback);
    });
};

export const register = (data, callback) => {
    const url = default_url + `/Register`;
    postRequest(url, data, callback);
}

export const logout = () => {
    return new Promise(()=>{
    const url = default_url + `/Logout`;
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.clear();
            alert(data.data.timer);
            //remove cookie
            document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure";
            window.location.replace("/Login");
        }
        else{
            toast.error(data.msg);
        }
    };
    postRequest(url, {}, callback);}
)
};

export const changeInfo = (data) => {
    // console.log(data);
    const url = default_url + `/User/ChangeInfo/${data.id}`;
    // console.log(url);
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            // window.location.replace("/Profile");
            toast.success("Change info successfully!");
        }
        else{
            toast.error(data.msg);
        }
    };
    postRequest(url, data, callback);
}

export const checkSession = (callback) => {
    //check if cookie exists
    // const cookieString = document.cookie;
    // const cookies = cookieString.split(';');
    //
    // let cookieExists = false;
    //
    // for (let i = 0; i < cookies.length; i++) {
    //     const cookie = cookies[i].trim();
    //     const cookieName = cookie.split('=')[0];
    //
    //     if (cookieName === "user") {
    //         cookieExists = true;
    //     }
    // }
    //
    // // console.log("cookieExists: " + cookieExists);
    //
    // //no login cookie
    // if(!cookieExists){
    //     //clear local storage
    //     localStorage.clear();
    //     callback(null);
    //     return;
    // }
    //
    // let user = localStorage.getItem("user");
    // if(user === null){
    //     callback(null);
    //     return;
    // }
    //
    // // console.log("user: " + user);
    //
    // // const id = user.id;
    // const id = JSON.parse(user).id;


    // console.log("id: " + id);

    const url = default_url + `/checkSession`;
    postRequest(url, {}, callback);
};

export const getUserInfo = (url, callback) => {
    let opts = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        origin: 'http://localhost:3000',
    }
    fetch(url, opts)
        .then((response) => response.json())
        .then((data) => {
            // console.log("test " + JSON.stringify(data.data));
            callback(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

