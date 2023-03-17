import React, { useState } from "react";
import { Button, Descriptions } from "antd";
import { BackwardOutlined } from "@ant-design/icons";
import Books from "../Data/Books";
import { Link } from "react-router-dom";

function BookDetail(props) {
  const book = props.bookitem;

  return (
    <div>
      <Link to="/">
        <Button type="primary" icon={<BackwardOutlined />}>
          Back
        </Button>
      </Link>
      <div>
        <div>
          <img src={book.imgURL} alt={book.title} />
          <Descriptions title={book.title} bordered>
            <Descriptions.Item label="Title">{book.title}</Descriptions.Item>
            <Descriptions.Item label="Author">{book.author}</Descriptions.Item>
            <Descriptions.Item label="Publisher">
              {book.publisher}
            </Descriptions.Item>
            <Descriptions.Item label="Price">{book.price}</Descriptions.Item>
            <Descriptions.Item label="Status">
              {book.status > 0 ? book.status : "Out of Stock"}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions bordered>
            <Descriptions.Item label="Introduction">
              {book.introduction}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
