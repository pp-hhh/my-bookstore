import React, { useState } from "react";
import Book from "./Book";
import { List } from "antd";

function BookList(props) {
  const position = "bottom",
    align = "center";

  return (
    <List
      pagination={{
        position,
        align,
      }}
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={props.books}
      renderItem={(book) => (
        <List.Item>
          <Book item={book}></Book>
        </List.Item>
      )}
    />
  );
}

export default BookList;
