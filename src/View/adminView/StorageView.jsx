import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import AdminHeaderInfo from "../../Components/admin/AdminHeaderInfo";
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
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        const endpoint = "http://localhost:8080/api/storage";
        function callback(data){
            setAllBooks(data);
            setStorageList(data);
        }
        getStorageList(endpoint, callback).then();
    }, [])


    function updateStorage(data){
        setStorageList(data);
    }


    function filterBook(searchInput){
        if(searchInput === ""){
            setStorageList(allBooks);
            return;
        }
        let newlist = storageList.filter((item) => {
            return item.title.toLowerCase().includes(searchInput.toLowerCase());
        })
        setStorageList(newlist);
    }


    return (
        <div className="View">
            <AdminHeaderInfo searchClick={filterBook} current={current} />
            <Layout className="middle-part">
                <Layout className="body">
                <AdminSideBar cur_key={current} />
                <Content>
                    <StorageList storageList={storageList} setStorages={updateStorage} />
                </Content>
                </Layout>
            </Layout>
            <Footer />
        </div>
    )
}

export default StorageView;