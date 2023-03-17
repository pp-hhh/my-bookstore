import React, { useState } from "react";
import HeaderInfo from "../Components/HeaderInfo";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import "../css/home.css";
import BookCarousel from "../Components/BookCarousel";
import BookList from "../Components/BookList";
import SearchBar from "../Components/SearchBar";
import Foot from "../Components/Foot";
import Books from "../Data/Books";

const { Header, Content, Footer } = Layout;

function HomeView() {
  const [list, setList] = useState(Books);

  function filterBook(searchvalue) {
    if (searchvalue === "") {
      setList(Books);
    } else {
      setList(
        list.filter((item) => {
          return (
            item.title.toLowerCase().includes(searchvalue.toLowerCase()) ||
            item.author.toLowerCase().includes(searchvalue.toLowerCase())
          );
        })
      );
    }
  }

  return (
    <div>
      <HeaderInfo />
      <Layout>
        <Layout className="body">
          <SideBar />
          <Content>
            <SearchBar className="searchBar" onClick={filterBook} />
            <BookCarousel />
            <BookList books={list} />
          </Content>
        </Layout>
        <Footer>
          <Foot />
        </Footer>
      </Layout>
    </div>
  );
}

export default HomeView;
