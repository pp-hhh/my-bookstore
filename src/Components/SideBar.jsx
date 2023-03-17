import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  BookOutlined,
  SolutionOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import "../css/index.css";

const { Sider } = Layout;

function SideBar() {
  const [current, setCurrent] = useState("1");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="mySider">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      />
      {/* TODO Menu Button */}
      <Menu mode="inline" onClick={onClick} defaultSelectedKeys={current}>
        <Menu.Item key="1">
          <BookOutlined className="sidebar-icon" />
          <label className="sidebar-label">Books</label>
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/Cart" />
          <ShoppingCartOutlined className="sidebar-icon" />
          <label className="sidebar-label">Cart</label>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/Order" />
          <SolutionOutlined className="sidebar-icon" />
          <label className="sidebar-label">Orders</label>
        </Menu.Item>
        <Menu.Item key="4">
          <UserOutlined className="sidebar-icon" />
          <label className="sidebar-label">Profile</label>
          <Link to="/Profile" />
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default SideBar;
