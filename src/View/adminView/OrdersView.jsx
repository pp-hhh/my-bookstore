import React, {useEffect, useState} from "react";
import HeaderInfo from "../../Components/HeaderInfo";
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

    useEffect(() => {
        const endpoint = "http://localhost:8080/api/orders";
        function callback(data){
            data.sort((a, b) => new Date(b.time) - new Date(a.time));
            setAllOrders(data);
        }
        getAllOrders(endpoint, callback).then();
    }, [])

    return (
        <div className="View">
            <HeaderInfo />
            <Layout className="middle-part">
                <Layout className="body">
                    <AdminSideBar cur_key={current} />
                    <Content>
                        <OrdersList orders={allOrders} />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default OrdersView;