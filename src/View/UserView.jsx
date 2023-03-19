import React from "react";
import HeaderInfo from "../Components/HeaderInfo";
import SideBar from "../Components/SideBar";
import { Layout } from "antd";
import Footer from "../Components/Footer";
import UserProfile from "../Components/UserProfile";

const { Content } = Layout;

function UserView(props) {
  return (
    <div className="View">
      <HeaderInfo />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar />
          <Content>
            <UserProfile user_id={props.id} />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default UserView;
