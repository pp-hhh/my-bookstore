import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import "../../css/index.css";

const { Sider } = Layout;

function AdminSideBar(props){
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
                    <Menu.Item key="/">
                        <Link to="/">
                            <label className="sidebar-label"
                                style={
                                (current === "/")? {fontWeight: "initial"}:{fontWeight: "lighter"}
                                }
                            >
                                Storage
                            </label>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/Orders">
                        <Link to="/Orders">
                            <label className="sidebar-label"
                                style={
                                (current === "/Orders") ? {fontWeight: "initial"}:{fontWeight: "lighter"}
                                }
                            >
                                Orders
                            </label>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>
    )
}

export default AdminSideBar;