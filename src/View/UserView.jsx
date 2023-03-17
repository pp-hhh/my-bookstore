import React from "react";
import HeaderInfo from "../Components/HeaderInfo";
import SideBar from "../Components/SideBar";
import { Layout } from "antd";
import Foot from "../Components/Foot";
import UserProfile from "../Components/UserProfile";

const { Content, Footer } = Layout;

function UserView() {
  return (
    <div>
      <HeaderInfo />
      <Layout>
        <Layout className="body">
          <SideBar />
          <Content>
            <UserProfile user_id={1} />
          </Content>
        </Layout>
        <Footer>
          <Foot />
        </Footer>
      </Layout>
    </div>
  );
}

export default UserView;
