import React, {useEffect, useState} from 'react';
import HeaderInfo from "../../Components/HeaderInfo";
import {Layout} from "antd";
import SideBar from "../../Components/SideBar";
import {useLocation} from "react-router-dom";
import StorageList from "../../Components/admin/StorageList";
import BookCarousel from "../../Components/BookCarousel";
import BookList from "../../Components/BookList";
import {getAllBooks} from "../../services/bookService";

const { Content } = Layout;


function UserHomeView(props){
    const location = useLocation();
    const current = location.pathname;

    const [list, setList] = useState([]);

    useEffect(() => {
        const endpoint = "http://localhost:8080/api/books";
        function callback(data){
            setList(data);
        }
        getAllBooks(endpoint, callback);
    }, []);


    return (
        <div className="View">
            <HeaderInfo />
            <Layout className="middle-part">
                <SideBar cur_key={current} />
                <Content>
                    <BookCarousel />
                    <BookList books={list} />
                </Content>
            </Layout>
        </div>
    )
}

export default UserHomeView;