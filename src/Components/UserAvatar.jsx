import React from "react";
import { Avatar } from "antd";
import "../css/index.css";
import User from "../Data/User";

function UserAvatar(props) {


  return <Avatar src={props.img} size={30} className="user-avatar" />;
}

export default UserAvatar;
