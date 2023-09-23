// import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";

const default_url = "http://localhost:8080";
// export const getBooks = (data, callback) => {
//     const url = default_url + `/getBooks`;
//     postRequest(url, data, callback);
// };
//
// export const getBook = (id, callback) => {
//     const data = {id: id};
//     const url = default_url + `/getBook`;
//     postRequest_v2(url, data, callback);
// };


export const getAllBooks = async (url, callback) => {
    await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const addBooktoCart = async (url, json, callback) => {
    let opts = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        origin: 'http://localhost:3000',
        body: JSON.stringify(json),
    }
    // console.log(json);
    await fetch(url, opts)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const purchaseBookDirectly = async (url, json, callback) => {
    let opts = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        origin: 'http://localhost:3000',
        credentials: 'include',
        body: JSON.stringify(json),
    }
    await fetch(url, opts)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
}