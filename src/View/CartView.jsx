import React from "react";
import { Layout } from "antd";
import HeaderInfo from "../Components/HeaderInfo";
import SideBar from "../Components/SideBar";
import CartList from "../Components/CartList";
import Footer from "../Components/Footer";

const { Content } = Layout;

function CartView() {
  return (
    <div className="View">
      <HeaderInfo />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar />
          <Content>
            <h3>My Shopping Cart</h3>
            <CartList />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default CartView;
