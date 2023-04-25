// import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";

const default_url = "http://localhost:8080";
export const getBooks = (data, callback) => {
    const url = default_url + `/getBooks`;
    postRequest(url, data, callback);
};

export const getBook = (id, callback) => {
    const data = {id: id};
    const url = default_url + `/getBook`;
    postRequest_v2(url, data, callback);

};