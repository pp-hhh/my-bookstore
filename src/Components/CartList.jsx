import React from "react";
import { Table, Button, InputNumber } from "antd";
import carts from "../Data/cart";

const { Column, ColumnGroup } = Table;

function CartList() {
  return (
    <div className="cartlist-container">
      <Table dataSource={carts}>
        <ColumnGroup title="Book">
          <Column
            title="Cover"
            dataIndex="imgURL"
            key="imgURL"
            width="120px"
            render={(imgURL) => {
              return <img src={imgURL} alt="" className="cartlist-img" />;
            }}
          />
          <Column
            title="Title"
            dataIndex="title"
            key="title"
            render={(title) => {
              return (
                <Button type="text" className="cartlist-title">
                  {title}
                </Button>
              );
            }}
          />
        </ColumnGroup>
        <Column
          title="Amount"
          dataIndex="amount"
          key="amount"
          render={(amount) => {
            return (
              <InputNumber
                style={{ width: "75%" }}
                defaultValue={amount}
                min={0}
              />
            );
          }}
        />
        <Column
          title="Price"
          dataIndex="price"
          key="price"
          className="cartlist-price"
        />
        <Column
          title="Action"
          dataIndex="action"
          key="action"
          render={(action) => {
            return action ? (
              <Button type="text" className="cartlist-action">
                Delete
              </Button>
            ) : null;
          }}
        />
      </Table>
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

export default CartList;
