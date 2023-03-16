import React from "react";
import HeaderInfo from "../Components/HeaderInfo";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import "../css/home.css";
import BookCarousel from "../Components/BookCarousel";
import BookList from "../Components/BookList";
import SearchBar from "../Components/SearchBar";
import Foot from "../Components/Foot";

const { Header, Content, Footer } = Layout;

function HomeView(props) {
  return (
    <Layout>
      <Header className="header">
        <HeaderInfo />
      </Header>
      <Layout className="body">
        <SideBar />
        <Content>
          <SearchBar className="searchBar"/>
          <BookCarousel />
          <BookList />
        </Content>
      </Layout>
      <Footer>
        <Foot/>
      </Footer>
    </Layout>
  );
}

export default HomeView;
