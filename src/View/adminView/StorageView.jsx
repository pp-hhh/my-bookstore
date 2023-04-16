import React from "react";
import {Link, useLocation} from "react-router-dom";
import HeaderInfo from "../../Components/HeaderInfo";
import SideBar from "../../Components/SideBar";
import { Layout } from "antd";
import Footer from "../../Components/Footer";
import StorageList from "../../Components/admin/StorageList";

const { Content } = Layout;

function StorageView(){
    const location = useLocation();
    const current = location.pathname;


    return (
        <div className="View">
            <HeaderInfo />
            <Layout className="middle-part">
                <Layout className="body">
                    <SideBar cur_key={current} />
                    <Content>
                        <StorageView />
                    </Content>
                </Layout>
            </Layout>
            <Footer />
        </div>
    )
}

export default StorageView;