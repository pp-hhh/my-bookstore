import React from "react";
import { Avatar } from "antd";
import "../css/index.css";
import User from "../Data/User";

function UserAvatar(props) {
  return <Avatar src={User[props.id].Avatar} size={50} className="user-avatar" />;
}

export default UserAvatar;
