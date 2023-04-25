// import config from 'config';
// import config from 'config';
import {postRequest} from "../utils/ajax";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";


const default_url = "http://localhost:8080";

export const login = (data, callback) => {
    return new Promise((resolve, reject) => {
        const url = default_url + `/Login`;
        // const callback = (data) => {
        //     if(data.status >= 0) {
        //         localStorage.setItem('user', JSON.stringify(data.data));
        //         //store data to cookie
        //         // 设置Cookie的过期时间为2小时
        //         // const expirationDate = new Date();
        //         // expirationDate.setTime(expirationDate.getTime() + 2 * 60 * 60 * 1000);
        //         // encode user info
        //         const encryptedUser = btoa(JSON.stringify(data.data));
        //         document.cookie = `user=${encryptedUser}; expires=0; path=/; SameSite=Strict; Secure`;
        //         //refresh page
        //         // window.location.replace("/");
        //         // eslint-disable-next-line react-hooks/rules-of-hooks
        //         useNavigate().push("/");
        //     }
        //     else{
        //         toast.error(data.msg);
        //     }
        // };
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
    console.log(data);
    const url = default_url + `/User/ChangeInfo/${data.id}`;
    console.log(url);
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            window.location.replace("/Profile");
        }
        else{
            toast.error(data.msg);
        }
    };
    postRequest(url, data, callback);
}

export const checkSession = async (callback) => {
    //check if cookie exists
    const cookieString = document.cookie;
    const cookies = cookieString.split(';');

    let cookieExists = false;

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const cookieName = cookie.split('=')[0];

        if (cookieName === "user") {
            cookieExists = true;
        }
    }

    //no login cookie
    if(!cookieExists){
        //clear local storage
        localStorage.clear();
        callback({status: -1, message: "No user"});
        return;
    }

    let user = localStorage.getItem("user");
    if(user === null){
        callback({status: -1, message: "No user"});
        return;
    }

    const id = JSON.parse(user).id;

    console.log("id: " + id);

    const url = default_url + `/checkSession`;
    postRequest(url, {id}, callback);
};

// export const checkSession = (callback) => {
//     // const url = `${config.apiUrl}/checkSession`;
//     const url = default_url + `/checkSession`;
//     postRequest(url, {}, callback);
// };

