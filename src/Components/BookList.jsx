import React from "react";
import Book from "./Book";
import { List } from "antd";
import books from "../Data/books";

function BookList() {
    const position = 'bottom', align = 'center';
  return (
    <List
        pagination={{
          position,
          align
        }}
      grid={{
        gutter: 16,
        column: 4
      }}
      dataSource={books}
      renderItem={(book) => (
      <List.Item>
        <Book title={book.title} imgURL={book.imgURL}></Book>
      </List.Item>
      )}
    />
  );
}

export default BookList;
