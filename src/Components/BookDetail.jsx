import React from "react";
import { Button, Descriptions } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function BookDetail(props) {
  const book = props.bookitem;

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
              <img src={book.imgURL} alt={book.title} className="book-img" />
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
                <Descriptions.Item label="Price">
                  {book.price}
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                  {book.status > 0 ? book.status : "Out of Stock"}
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
        <Button type="text" className="add-cart-btn">
          Add to my cart
        </Button>
        <Button type="text" className="purchase-btn">
          Purchase now
        </Button>
      </div>
    </div>
  );
}

export default BookDetail;
