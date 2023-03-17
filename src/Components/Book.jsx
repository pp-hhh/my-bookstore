import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

function Book(props) {
  return (
    <Link to={`/Book/${props.item.id}`}>
      <Card
        hoverable
        style={{ width: 175 }}
        cover={
          <img
            src={props.item.imgURL}
            alt={props.item.imgalt}
            style={{ width: 175, height: 225 }}
          />
        }
      >
        <Meta title={props.item.title} description={props.item.price} />
      </Card>
    </Link>
  );
}

export default Book;
