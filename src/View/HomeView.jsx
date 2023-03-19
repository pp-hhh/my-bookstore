import React, { useState } from "react";
import HeaderInfo from "../Components/HeaderInfo";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import "../css/home.css";
import BookCarousel from "../Components/BookCarousel";
import BookList from "../Components/BookList";
import Footer from "../Components/Footer";
import Books from "../Data/Books";

const { Content } = Layout;

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
    <div className="View">
      <HeaderInfo searchClick={filterBook} />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar />
          <Content>
            <BookCarousel />
            <BookList books={list} />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default HomeView;
