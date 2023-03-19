import React from "react";
import { Layout } from "antd";
import HeaderInfo from "../Components/HeaderInfo";
import SideBar from "../Components/SideBar";
import SearchBar from "../Components/SearchBar";
import OrderList from "../Components/OrderList";
import Footer from "../Components/Footer";

const { Content } = Layout;

function OrderView() {
  return (
    <div className="View">
      <HeaderInfo />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar />
          <Content>
            <h3>My Order</h3>
            <OrderList />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default OrderView;
