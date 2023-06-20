import React, {useState} from "react";
import {Button, Descriptions, InputNumber} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {addBooktoCart, purchaseBookDirectly} from "../services/bookService";
import {toast} from "react-toastify";

function BookDetail(props) {
  const book = props.bookitem;
  const user = localStorage.getItem("user");
  const user_id = JSON.parse(user).id;

  const [bookNum, setBookNum] = useState(1);

  function handleNumberChange(value){
    setBookNum(value);
  }

  //add to cart
  function handleClick(){
    const data = {book_id: Number(book.id), adder_id: Number(user_id), number: Number(bookNum)};
    const url = "http://localhost:8080/book/addtocart";
    function callback(data){
      if(data === true){
        toast.success("add to cart successfully!");
      }else{
        toast.error("add to cart failed!");
      }
    }
    addBooktoCart(url, data, callback).then();
  }

  function purchaseBook(){
    const data = {bookId: Number(book.id), userId: Number(user_id), quantity: Number(bookNum)};
    const url = "http://localhost:8080/book/purchaseDirectly";
    function callback(data) {
      if(data === true){
        toast.success("purchase successfully!");
      }else{
        toast.error("purchase failed!");
      }
    }
    purchaseBookDirectly(url, data, callback).then();
  }

  return (
    <div className="bookdetail-container">
      <Link to="/">
        <Button type="text" icon={<SearchOutlined />} className="back-btn">
          Back
        </Button>
      </Link>
      <div>
        <div>
          <h3 className="bookdetail-title">{book.title}</h3>
          <div className="bookdetail-part1">
            <div className="bookdetail-img">
              <img src={book.image} alt={book.title} className="book-img" />
            </div>
            <div className="bookdetail-description1">
              <Descriptions bordered className="book-info" column={1}>
                <Descriptions.Item label="Title">
                  {book.title}
                </Descriptions.Item>
                <Descriptions.Item label="Author">
                  {book.author}
                </Descriptions.Item>
                <Descriptions.Item label="Publisher">
                  {book.publisher}
                </Descriptions.Item>
                <Descriptions.Item label="ISBN">
                  {book.isbn}
                </Descriptions.Item>
                <Descriptions.Item label="Price">
                  ${book.price}
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                  {book.stock > 0 ? "Available" : "Out of Stock"}
                </Descriptions.Item>
                <Descriptions.Item label="Select number">
                  <InputNumber
                      style={{ width: "75%" }}
                      defaultValue={1}
                      min={1}
                      onChange={(value) => handleNumberChange(value)}
                  />
                </Descriptions.Item>
              </Descriptions>
            </div>
          </div>
          <Descriptions bordered className="book-intro">
            <Descriptions.Item label="Introduction">
              {book.introduction}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
      <div className="btn-group">
        <Button type="text" className="add-cart-btn" onClick={handleClick}>
          Add to my cart
        </Button>
        <Button type="text" className="purchase-btn" onClick={purchaseBook}>
          Purchase now
        </Button>
      </div>
    </div>
  );
}

export default BookDetail;
