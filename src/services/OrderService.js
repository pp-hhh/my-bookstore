// import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";

const default_url = "http://localhost:8080";
// export const purchaseBookDirectly = async (data, callback) => {
//     let url = default_url + `/purchase/direct`;
//     url += "?book_id=" + data.bookId.toString() + "&user_id=" + data.userId.toString() + "&quantity=" + data.quantity.toString();
//
//     await post_request(url);
// }


export const purchaseBookDirectly = async (data) => {
    let url = default_url + `/purchase/direct`;

    const callback = (data) => {
        console.log(data);
    };
    // await post_request(url);
    postRequest(url, data, callback);
}