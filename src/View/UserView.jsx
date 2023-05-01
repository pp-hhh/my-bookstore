import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderInfo from "../Components/HeaderInfo";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import UserProfile from "../Components/UserProfile";
import Footer from "../Components/Footer";
import {getUserInfo} from "../services/userService";
import {defaultUser} from "../Data/User";

const { Content } = Layout;

function UserView(props) {
  const location = useLocation();
  const current = location.pathname;
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user.username;
  // console.log("in user view: " + username);
  const [userInfo, setUserInfo] = useState(defaultUser);
    // let userInfo = {};

  useEffect(() => {
      const endpoint = `http://localhost:8080/user/${username}`;
      function callback(data) {
          let new_data = JSON.parse(JSON.stringify(data));
          setUserInfo({
                ...userInfo,
                username: new_data.username,
                email: new_data.email,
                role: new_data.role,
                avatar: new_data.avatar,
                notes: new_data.notes
            });
          // userInfo = updatedUser;
          console.log(new_data);
          console.log(userInfo);
      }
      getUserInfo(endpoint, callback);
  }, [])


  return (
    <div className="View">
      <HeaderInfo />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar cur_key={current} />
          <Content>
            <UserProfile user={userInfo} />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default UserView;
