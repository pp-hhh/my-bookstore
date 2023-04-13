import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderInfo from "../Components/HeaderInfo";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import "../css/home.css";
import BookCarousel from "../Components/BookCarousel";
import BookList from "../Components/BookList";
import Footer from "../Components/Footer";

const { Content } = Layout;

function HomeView() {
  const [list, setList] = useState([]);

  const location = useLocation();
  const current = location.pathname;

  const navigate = useNavigate();

  useEffect(() => {
    const endpoint = "http://localhost:8080/api/books";
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setList(data); // 将获得的图书数据存入组件的状态中
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // function filterBook(searchvalue) {
  //   if (searchvalue === "") {
  //     setList(Books);
  //   } else {
  //     setList(
  //       list.filter((item) => {
  //         return (
  //           item.title.toLowerCase().includes(searchvalue.toLowerCase()) ||
  //           item.author.toLowerCase().includes(searchvalue.toLowerCase())
  //         );
  //       })
  //     );
  //   }
  //   navigate("/");
  // }

  function filterBook(){}

  return (
    <div className="View">
      <HeaderInfo searchClick={filterBook} />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar cur_key={current} />
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
