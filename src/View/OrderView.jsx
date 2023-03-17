import React from "react";
import { Layout } from "antd";
import HeaderInfo from "../Components/HeaderInfo";
import SideBar from "../Components/SideBar";
import SearchBar from "../Components/SearchBar";
import OrderList from "../Components/OrderList";

const { Content } = Layout;

function OrderView() {
  return (
    <div>
      <HeaderInfo />
      <Layout>
        <Layout>
          <SideBar />
          <Content>
            <h3>My Order</h3>
            <SearchBar />
            <OrderList />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default OrderView;
