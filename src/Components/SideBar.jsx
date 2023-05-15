import React from "react";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  BookOutlined,
  SolutionOutlined,
  ShoppingCartOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "../css/index.css";

const { Sider } = Layout;

function SideBar(props) {
  const current = props.cur_key;

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
          <Menu.Item key="/" exact={current === "/" || current === "/Home"}>
            <Link to="/">
            <BookOutlined
              style={{ fontSize: "20px" }}
              className="sidebar-icon"
            />
            <label
              className="sidebar-label"
              style={
                (current === "/" || current === "/Home")
                  ? { fontWeight: "initial" }
                  : { fontWeight: "lighter" }
              }
            >
              Books
            </label>
            </Link>
          </Menu.Item>
          <Menu.Item key="/Cart">
            <Link to="/Cart">
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
            </Link>
          </Menu.Item>
          <Menu.Item key="/Order">
            <Link to="/Order">
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
            </Link>
          </Menu.Item>
          <Menu.Item key="/Data">
            <Link to="/OrderData">
              <TableOutlined
                  className="sidebar-icon"
                  style={{ fontSize: "20px" }}
              />
              <label
                  className="sidebar-label"
                  style={
                    current === "/Data"
                        ? { fontWeight: "initial" }
                        : { fontWeight: "lighter" }
                  }
              >
                Data
              </label>
            </Link>
          </Menu.Item>
          <Menu.Item key="/Profile">
            <Link to="/Profile">
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
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}

export default SideBar;
