import React from "react";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import HeaderInfo from "../Components/HeaderInfo";
import Footer from "../Components/Footer";
import BookDetail from "../Components/BookDetail";
import { useParams } from "react-router-dom";
import Books from "../Data/Books";

const { Content } = Layout;

function BookView() {
  const { id } = useParams();

  const book = Books.find((item) => {
    return item.key === Number(id);
  });

  return (
    <div className="View">
      <HeaderInfo />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar style={{ padding: "0 50px" }} />
          <Content>
            <BookDetail bookitem={book} />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default BookView;
