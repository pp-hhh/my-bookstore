import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  UserOutlined,
  BookOutlined,
  SolutionOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Layout, Menu, theme } from "antd";
import "../css/index.css";
import { fontSize } from "@mui/system";
// import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

const { Sider } = Layout;

function SideBar() {
  const location = useLocation();
  const current = location.pathname;

  // console.log(current);

  return (
    <div className="siderbar-container">
      <Sider
        style={{
          backgroundColor: "white",
          height: "100%",
          border: "none",
        }}
        width={200}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
      >
        <Menu mode="inline" selectedKeys={[current]}>
          <Menu.Item key="/">
            {/* <AccountCircleOutlinedIcon className="sidebar-icon"/> */}
            <BookOutlined
              style={{ fontSize: "20px" }}
              className="sidebar-icon"
            />
            <label
              className="sidebar-label"
              style={
                current === "/"
                  ? { fontWeight: "initial" }
                  : { fontWeight: "lighter" }
              }
            >
              Books
            </label>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="/Cart">
            <Link to="/Cart" />
            <ShoppingCartOutlined
              className="sidebar-icon"
              style={{ fontSize: "20px" }}
            />
            <label
              className="sidebar-label"
              style={
                current === "/Cart"
                  ? { fontWeight: "initial" }
                  : { fontWeight: "lighter" }
              }
            >
              Cart
            </label>
          </Menu.Item>
          <Menu.Item key="/Order">
            <Link to="/Order" />
            <SolutionOutlined
              className="sidebar-icon"
              style={{ fontSize: "20px" }}
            />
            <label
              className="sidebar-label"
              style={
                current === "/Order"
                  ? { fontWeight: "initial" }
                  : { fontWeight: "lighter" }
              }
            >
              Orders
            </label>
          </Menu.Item>
          <Menu.Item key="/Profile">
            <UserOutlined
              className="sidebar-icon"
              style={{ fontSize: "20px" }}
            />
            <label
              className="sidebar-label"
              style={
                current === "/Profile"
                  ? { fontWeight: "initial" }
                  : { fontWeight: "lighter" }
              }
            >
              Profile
            </label>
            <Link to="/Profile" />
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}

export default SideBar;
