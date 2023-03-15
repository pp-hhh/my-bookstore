import React, { useState } from "react";
import { UserOutlined, BookOutlined, SolutionOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from "antd";
import "../css/index.css";

const { Sider } = Layout;

function SideBar() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

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
        <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <BookOutlined className="sidebar-icon"/>
                <label className="sidebar-label">Books</label>
            </Menu.Item>
            <Menu.Item key="2">
                <ShoppingCartOutlined className="sidebar-icon"/>
                <label className="sidebar-label">Cart</label>
            </Menu.Item>
            <Menu.Item key="3">
                <SolutionOutlined className="sidebar-icon"/>
                <label className="sidebar-label">Orders</label>
            </Menu.Item>
            <Menu.Item key="4">
                <UserOutlined className="sidebar-icon"/>
                <label className="sidebar-label">Profile</label>
            </Menu.Item>
        </Menu>
    </div>
  );
}

export default SideBar;
