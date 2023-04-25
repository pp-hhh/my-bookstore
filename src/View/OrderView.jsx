import React, {useEffect, useState} from "react";
import HeaderInfo from "../Components/HeaderInfo";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import OrderList from "../Components/OrderList";
import Footer from "../Components/Footer";

const { Content } = Layout;

function OrderView() {
  const location = useLocation();
  const current = location.pathname;

  const [orders, setOrders] = useState([])

  useEffect(() => {
      const endpoint = "http://localhost:8080/api/orders";
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            console.log("test");
            setOrders(data);
          // console.log(data);
        }).catch((error) => {
            console.log(error);
            })
      }, []);

  return (
    <div className="View">
      <HeaderInfo />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar cur_key={current} />
          <Content>
            <OrderList />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default OrderView;
