import React, {useEffect, useState} from 'react';
import AdminHeaderInfo from "../../Components/admin/AdminHeaderInfo";
import {Layout} from "antd";
import AdminSideBar from "../../Components/admin/AdminSideBar";
import {useLocation} from "react-router-dom";
import {Content} from "antd/es/layout/layout";
import UserPurchaseDataList from "../../Components/admin/UserPurchaseDataList";
import {getAllOrders} from "../../services/adminService";
import BookPurchaseDataList from "../../Components/admin/BookPurchaseDataList";


function DataView(){
    const location = useLocation();
    const current = location.pathname;

    // const [allOrders, setAllOrders] = useState([]);
    const [initialOrders, setInitialOrders] = useState([]);
    const [purchaseData, setPurchaseData] = useState([]);
    const [initialPurchaseData, setInitialPurchaseData] = useState([]);

    const [bookPurchaseData, setBookPurchaseData] = useState([]);
    const [initialBookData, setInitialBookData] = useState([]);

    useEffect(() => {
        const endpoint = "http://localhost:8080/api/orders";

        function callback(data) {
            setInitialOrders(data);

            //user part
            let userPurchaseData = {};
            for(let i = 0; i < data.length; ++i){
                let user_id = data[i].userId;
                let user_name = data[i].username;
                if (!userPurchaseData[user_id]) {
                    userPurchaseData[user_id] = {
                        id: user_id,
                        username: user_name,
                        total_price: 0,
                    };
                }
                userPurchaseData[user_id].total_price += data[i].total_price;
            }
            // let sortedUserPurchaseData = Object.entries(userPurchaseData).sort((a, b) => b[1].total_price - a[1].total_price);
            setPurchaseData(Object.values(userPurchaseData));
            setInitialPurchaseData(Object.values(userPurchaseData));


            //book part
            let bookPurchaseData = {};
            for(let i = 0; i < data.length; ++i){
                let orders = data[i].orderItemForms;
                // console.log(orders);
                for(let j = 0; j < orders.length; ++j){
                    let orderitem = orders[j];
                    let id = orderitem.book_id;
                    if(!bookPurchaseData[id]){
                        bookPurchaseData[id] = {
                            id: id,
                            title: orderitem.book_title,
                            cover: orderitem.book_cover,
                            price: orderitem.book_price,
                            amount: 0,
                        };
                    }
                    bookPurchaseData[id].amount += orderitem.amount;
                }
            }
            setBookPurchaseData(Object.values(bookPurchaseData));
            setInitialBookData(Object.values(bookPurchaseData));

        }

        getAllOrders(endpoint, callback).then();
    }, [])


    function searchByTime(searchInput){
        if(searchInput[0] === null && searchInput[1] === null){
            // setAllOrders(initialOrders);
            setPurchaseData(initialPurchaseData);
            return;
        }

        let startTime = new Date(searchInput[0]).getTime();
        let endTime = new Date(searchInput[1]).getTime();


        let userPurchaseData = {};

        for(let i = 0; i < initialOrders.length; ++i){
            let orderTime = new Date(initialOrders[i].time).getTime();
            let user_id = initialOrders[i].userId;
            let user_name = initialOrders[i].username;
            if (!userPurchaseData[user_id]) {
                userPurchaseData[user_id] = {
                    id: user_id,
                    username: user_name,
                    total_price: 0,
                };
            }
            if(orderTime >= startTime && orderTime <= endTime){
                userPurchaseData[user_id].total_price += initialOrders[i].total_price;
            }
        }

        // let sortedUserPurchaseData = Object.entries(userPurchaseData).sort((a, b) => b[1].total_price - a[1].total_price);
        setPurchaseData(Object.values(userPurchaseData));
    }

    function searchBookByTime(value){
        if(value[0] === null && value[1] === null){
            setBookPurchaseData(initialBookData);
            return;
        }

        let startTime = new Date(value[0]).getTime();
        let endTime = new Date(value[1]).getTime();

        let bookPurchaseData = {};
        for(let i = 0; i < initialOrders.length; ++i){
            let orders = initialOrders[i].orderItemForms;
            let ordertime = new Date(initialOrders[i].time).getTime();
            if(ordertime < startTime || ordertime > endTime) continue;
            for(let j = 0; j < orders.length; ++j){
                let orderitem = orders[j];
                let id = orderitem.book_id;
                let title = orderitem.book_title;
                if(!bookPurchaseData[id]){
                    bookPurchaseData[id] = {
                        id: id,
                        title: orderitem.book_title,
                        cover: orderitem.book_cover,
                        price: orderitem.book_price,
                        amount: 0,
                    };
                }
                bookPurchaseData[id].amount += orderitem.amount;
            }
        }
        setBookPurchaseData(Object.values(bookPurchaseData));
    }

    return (
        <div className="View">
            <AdminHeaderInfo />
            <Layout className="middle-part">
                <Layout className="body">
                    <AdminSideBar cur_key={current} />
                    <Content>
                        <UserPurchaseDataList orders={purchaseData} filterByTime={searchByTime} />
                        <BookPurchaseDataList orders={bookPurchaseData} filterByTime={searchBookByTime} />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default DataView;