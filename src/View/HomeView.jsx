import React, { useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import HeaderInfo from "../Components/HeaderInfo";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import "../css/home.css";
import BookCarousel from "../Components/BookCarousel";
import BookList from "../Components/BookList";
import Footer from "../Components/Footer";
import Books from "../Data/Books";
import CartList from "../Components/CartList";
import OrderList from "../Components/OrderList";
import UserProfile from "../Components/UserProfile";
import BookView from "./BookView";

const { Content } = Layout;

function HomeView() {
  const [list, setList] = useState(Books);

  const location = useLocation();
  const current = location.pathname;

  const navigate = useNavigate();

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
    console.log(list);

    navigate("/");
  }

  return (
    <div className="View">
      <HeaderInfo searchClick={filterBook} />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar cur_key={current} />
          <Content>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <BookCarousel />
                    <BookList books={list} />
                  </>
                }
              />
              <Route path="/Cart" element={<CartList />} />
              <Route path="/Order" element={<OrderList />} />
              <Route path="/Profile" element={<UserProfile user_id={1} />} />
              <Route path="/Book/:id" element={<BookView />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default HomeView;
