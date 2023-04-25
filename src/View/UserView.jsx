import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderInfo from "../Components/HeaderInfo";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import UserProfile from "../Components/UserProfile";
import Footer from "../Components/Footer";

const { Content } = Layout;

function UserView(props) {
  const location = useLocation();
  const current = location.pathname;
  const user = JSON.parse(localStorage.getItem("user"));


  return (
    <div className="View">
      <HeaderInfo />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar cur_key={current} />
          <Content>
            <UserProfile user={user} />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default UserView;
