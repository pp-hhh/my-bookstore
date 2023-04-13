// import config from 'config';
import {postRequest} from "../utils/ajax";
import {history} from '../utils/history';
import { toast } from "react-toastify";


const default_url = "http://localhost:8080";
export const login = (data) => {
    const url = default_url + `/Login`;
    const callback = (data) => {
        if(data.message === "OK") {
            localStorage.setItem('user', JSON.stringify(data.data));
            history.push("/");
            // message.success(data.msg);
        }
        else{
            // message.error(data.msg);
            toast.error(data.message);
        }
    };
    postRequest(url, data, callback);
};

export const register = (data) => {
    const url = default_url + `/Register`;
    const callback = (data) => {
        if(data.message === "OK") {
            // localStorage.setItem('user', JSON.stringify(data.data));
            history.push("/Login");
            // message.success(data.msg);
        }
        else{
            // message.error(data.msg);
            toast.error(data.message);
        }
    };
    postRequest(url, data, callback);
}

export const logout = () => {
    const url = default_url + `/Logout`;

    const callback = (data) => {
        if(data.message === "OK") {
            localStorage.removeItem("user");
            history.push("/Login");
        }
        else{
            toast.error(data.message);
        }
    };
    postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
    const url = default_url + `/checkSession`;
    postRequest(url, {}, callback);
};

