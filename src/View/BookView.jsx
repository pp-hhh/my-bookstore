import React, {useEffect, useState} from "react";
import BookDetail from "../Components/BookDetail";
import { useParams } from "react-router-dom";
import { Layout } from "antd";
import HeaderInfo from "../Components/HeaderInfo";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

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
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  //add book to cart
  // function addBookToCart() {
  //   fetch(`http://localhost:8080/api/cart/${id}`, {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     origin: "http://localhost:3000",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // 处理后端返回的数据
  //       if (data.message === "OK") {
  //         // add succuessfully
  //         alert("Add to cart successfully!");
          
  //       } else {
  //         // add failed
  //         alert("Add to cart failed!");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  //add book to cart in localstorage
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []); // cart in localstorage

  function addBookToCart(book) {
    // cart = JSON.parse(localStorage.getItem("cart"));
    // if (cart === null) {
    //   cart = [];
    // }
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
