import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

function Book(props) {
  return (
    <Link to={`/Book/${props.item.id}`}>
      <div className="book-wrapper">
        <Card
          cover={
            <img
              src={props.item.image}
              alt={props.item.image}
              style={{ height: "250px", width: "100%", borderRadius: "10px" }}
            />
          }
        >
          <Meta
            title={props.item.title}
            description={
              <>
                {props.item.author}
                <br />
                {props.item.price}
              </>
            }
            className="book-card"
          />
        </Card>
      </div>
    </Link>
  );
}

export default Book;
