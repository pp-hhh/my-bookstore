import React from "react";
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
