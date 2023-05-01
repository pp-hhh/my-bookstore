import React, {useEffect, useState} from "react";
import HeaderInfo from "../Components/HeaderInfo";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import OrderItem from "../Components/OrderItem";
import Footer from "../Components/Footer";
import {getOrders} from "../services/OrderService";
import OrderList from "../Components/OrderList";

const { Content } = Layout;

function OrderView() {
  const location = useLocation();
  const current = location.pathname;
  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = user.id;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
      const endpoint = `http://localhost:8080/order/${user_id}`;
      function callback(data){
          setOrders(data);
      }
      getOrders(endpoint, callback).then();
  }, [])



  return (
    <div className="View">
      <HeaderInfo />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar cur_key={current} />
          <Content>
              <OrderList orderList={orders} />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default OrderView;
