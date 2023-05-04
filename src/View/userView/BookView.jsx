import React, {useEffect, useState} from "react";
import BookDetail from "../../Components/BookDetail";
import { useParams } from "react-router-dom";
import { Layout } from "antd";
import HeaderInfo from "../../Components/HeaderInfo";
import SideBar from "../../Components/SideBar";
import Footer from "../../Components/Footer";

const { Content } = Layout;

function BookView() {
  const { id } = useParams();

  const [book, setBook] = useState([]);

  //get book detail
  useEffect(() => {
    fetch(`http://localhost:8080/api/book/${id}`)
      .then(response => response.json())
      .then(data => {
        setBook(data);
        // console.log("book detail: " + JSON.stringify(data));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  //add book to cart in localstorage
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []); // cart in localstorage
  const [order, setOrder] = useState(JSON.parse(localStorage.getItem("order")) || []);

  function addBookToCart(book) {
    let new_book = {
      id: id,
      title: book.title,
      image: book.image,
      price: book.price,
      amount: 1,
      action: true,
    };
    console.log(new_book);
    setCart([...cart, new_book]);
    // console.log(cart);
    localStorage.setItem("cart", JSON.stringify([...cart, new_book]));
    alert("Add to cart successfully!");
  }


  return (
    <div className="View">
      <HeaderInfo />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar cur_key="/Home" />
          <Content>
            <BookDetail bookitem={book} addCart={addBookToCart} />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default BookView;
