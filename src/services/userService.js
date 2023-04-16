// import config from 'config';
import {postRequest} from "../utils/ajax";
import { toast } from "react-toastify";


const default_url = "http://localhost:8080";

export const login = (data) => {
    return new Promise((resolve, reject) => {
        const url = default_url + `/Login`;
        const callback = (data) => {
            if(data.status >= 0) {
                localStorage.setItem('user', JSON.stringify(data.data));
                window.location.replace("/");
            }
            else{
                toast.error(data.msg);
            }
        };
        postRequest(url, data, callback);
    });
};

export const register = (data) => {
    const url = default_url + `/Register`;
    const callback = (data) => {
        if(data.status >= 0) {
            window.location.replace("/Login");
        }
        else{
            // message.error(data.msg);
            toast.error(data.message);
        }
    };
    postRequest(url, data, callback);
}

export const logout = () => {
    return new Promise(()=>{
    const url = default_url + `/Logout`;
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.removeItem('user');
            window.location.replace("/Login");
        }
        else{
            toast.error(data.msg);
        }
    };
    postRequest(url, {}, callback);}
)
};

export const checkSession = async (callback) => {
    let user = localStorage.getItem("user");
    if(user !== null){
        callback({status: 1, message: "OK", data: JSON.parse(user)});
        return;
    }

    const url = default_url + `/checkSession`;
    await postRequest(url, {}, callback);
};

