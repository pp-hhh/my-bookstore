import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderInfo from "../Components/HeaderInfo";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import UserProfile from "../Components/UserProfile";
import Footer from "../Components/Footer";
import {getUserInfo} from "../services/userService";
import {defaultUser} from "../Data/User";
import * as userService from "../services/userService";
import {toast} from "react-toastify";

const { Content } = Layout;

function UserView(props) {
  const location = useLocation();
  const current = location.pathname;
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user.username;
  const [userInfo, setUserInfo] = useState(defaultUser);
  const [initialUser, setInitialUser] = useState(defaultUser);

  useEffect(() => {
      const endpoint = `http://localhost:8080/user/${username}`;
      function callback(data) {
          // initialUser = data;
          setInitialUser(data);
          setUserInfo(data);
      }
      getUserInfo(endpoint, callback);
  }, [])

    function changeUserInfo(name, value){
      setUserInfo({...userInfo, [name]: value});
    }

    function saveBtnClick(){
      const {username, email} = userInfo;
      if(!username || !email){
          toast.error("Please fill in all the required fields");
      }else{
          userService.changeInfo(userInfo);
      }
    }

    function cancelChange(){
      setUserInfo(initialUser);
      window.location.reload();
    }


  return (
    <div className="View">
      <HeaderInfo current={current}/>
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar cur_key={current} />
          <Content>
            <UserProfile user={userInfo} updateUserInfo={changeUserInfo} saveChange={saveBtnClick} cancelChange={cancelChange}/>
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default UserView;
