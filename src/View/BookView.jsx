import React, { useState } from "react";
import {Layout} from 'antd';
import SideBar from "../Components/SideBar";
import HeaderInfo from "../Components/HeaderInfo";
import Foot from "../Components/Foot";
import BookDetail from "../Components/BookDetail";
import books from "../Data/books";

const { Header, Content, Footer } = Layout;

function BookView(props){
    const getbook = (books.filter((book) => {
        return book.id === props.bookid;
    }));


    return (
        <Layout>
            <Header className="header">
                <HeaderInfo/>
            </Header>
            <Layout className="body">
                <SideBar style={{ padding: '0 50px' }}/>
                <Content>
                    <BookDetail book={getbook}/>
                </Content>
            </Layout>
            <Footer>
                <Foot/>
            </Footer>
        </Layout>
    )
}

export default BookView;