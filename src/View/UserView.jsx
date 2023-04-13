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

  // const [user, setUser] = useState(null);
  // const [username, setUserName] = useState("");

  // useEffect(() => {
  //   // 发起获取用户数据的请求
  //   fetch(`http://localhost:8080/user/${username}`, {
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     origin: "http://localhost:3000",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // 将获取到的用户数据保存在状态中
  //       setUser(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
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
