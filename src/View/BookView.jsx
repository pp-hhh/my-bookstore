import React from "react";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import HeaderInfo from "../Components/HeaderInfo";
import Foot from "../Components/Foot";
import BookDetail from "../Components/BookDetail";
import { useParams } from "react-router-dom";
import Books from "../Data/Books";

const { Content, Footer } = Layout;

function BookView() {
  const { id } = useParams();

  const book = Books.find((item) => {
    return item.key === Number(id);
  });

  console.log(book);

  return (
    <div>
      <HeaderInfo />
      <Layout>
        <Layout className="body">
          <SideBar style={{ padding: "0 50px" }} />
          <Content>
            <BookDetail bookitem={book} />
          </Content>
        </Layout>
        <Footer>
          <Foot />
        </Footer>
      </Layout>
    </div>
  );
}

export default BookView;
