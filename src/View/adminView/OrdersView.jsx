import React, {useEffect, useState} from "react";
import AdminHeaderInfo from "../../Components/admin/AdminHeaderInfo";
import {Layout} from "antd";
import AdminSideBar from "../../Components/admin/AdminSideBar";
import {useLocation} from "react-router-dom";
import OrdersList from "../../Components/admin/OrdersList";
import {getAllOrders} from "../../services/adminService";

const {Content} = Layout;


function OrdersView(){
    const location = useLocation();
    const current = location.pathname;

    const [allOrders, setAllOrders] = useState([]);
    const [initialOrders, setInitialOrders] = useState([]);

    useEffect(() => {
        const endpoint = "http://localhost:8080/api/orders";
        function callback(data){
            data.sort((a, b) => new Date(b.time) - new Date(a.time));
            setAllOrders(data);
            setInitialOrders(data);
        }
        getAllOrders(endpoint, callback).then();
    }, [])

    function searchByTitle(searchInput){
        if(searchInput === ""){
            setAllOrders(initialOrders);
            return;
        }
        let newlist = [];

        for(let i = 0; i < initialOrders.length; ++i){
            let order = initialOrders[i].orderItemForms;
            for(let j = 0; j < order.length; ++j){
                if(order[j].book_title.toLowerCase().includes(searchInput.toLowerCase())){
                    newlist.push(initialOrders[i]);
                    break;
                }
            }
        }
        setAllOrders(newlist);
    }

    function searchByTime(searchInput){
        if(searchInput[0] === null && searchInput[1] === null){
            setAllOrders(initialOrders);
            return;
        }

        let startTime = new Date(searchInput[0]).getTime();
        let endTime = new Date(searchInput[1]).getTime();

        let newlist = [];

        for(let i = 0; i < initialOrders.length; ++i){
            // let order = allOrders[i].orderItemForms;
            let orderTime = new Date(initialOrders[i].time).getTime();
            if(orderTime >= startTime && orderTime <= endTime){
                newlist.push(initialOrders[i]);
            }
        }
        setAllOrders(newlist);
    }

    return (
        <div className="View">
            <AdminHeaderInfo />
            <Layout className="middle-part">
                <Layout className="body">
                    <AdminSideBar cur_key={current} />
                    <Content>
                        <OrdersList orders={allOrders} filterByTitle={searchByTitle} filterByTime={searchByTime} />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default OrdersView;