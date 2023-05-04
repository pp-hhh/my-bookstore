import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import HeaderInfo from "../../Components/HeaderInfo";
import SideBar from "../../Components/SideBar";
import { Layout } from "antd";
import Footer from "../../Components/Footer";
import AdminSideBar from "../../Components/admin/AdminSideBar";
import StorageList from "../../Components/admin/StorageList";
import {getStorageList} from "../../services/adminService";

const { Content } = Layout;

function StorageView(){
    const location = useLocation();
    const current = location.pathname;

    const [storageList, setStorageList] = useState([]);

    useEffect(() => {
        const endpoint = "http://localhost:8080/api/storage";
        function callback(data){
            setStorageList(data);
        }
        getStorageList(endpoint, callback).then();
    }, [])


    return (
        <div className="View">
            <HeaderInfo />
            <Layout className="middle-part">
                <Layout className="body">
                <AdminSideBar cur_key={current} />
                <Content>
                    <StorageList storageList={storageList} />
                </Content>
                </Layout>
            </Layout>
            <Footer />
        </div>
    )
}

export default StorageView;