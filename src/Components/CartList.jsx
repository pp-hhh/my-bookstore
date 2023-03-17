import React from "react";
import { Table, Button, InputNumber } from "antd";
import carts from "../Data/cart";

const { Column, ColumnGroup } = Table;

function CartList() {
  return (
    <div>
      <Table dataSource={carts}>
        <ColumnGroup title="Book">
          <Column
            title="Cover"
            dataIndex="imgURL"
            key="imgURL"
            render={(imgURL) => {
              return <img src={imgURL} alt="" style={{ width: "20%" }} />;
            }}
          />
          <Column
            title="Title"
            dataIndex="title"
            key="title"
            render={(title) => {
              return <Button type="text">{title}</Button>;
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
                style={{ width: "100%" }}
                defaultValue={amount}
                min={0}
              />
            );
          }}
        />
        <Column title="Price" dataIndex="price" key="price" />
        <Column
          title="Action"
          dataIndex="action"
          key="action"
          render={(action) => {
            return action ? <Button type="dashed">Delete</Button> : null;
          }}
        />
      </Table>
    </div>
  );
}

export default CartList;
