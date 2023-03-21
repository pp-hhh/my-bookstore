import React from "react";
import { Table, Button } from "antd";
import Orders from "../Data/Orders";

const { Column, ColumnGroup } = Table;

function OrderList() {
  return (
    <div className="orderlist-container">
      <h3>My Order</h3>
      <Table dataSource={Orders}>
        <ColumnGroup title="Book">
          <Column
            title="Cover"
            dataIndex="imgURL"
            key="imgURL"
            width="120px"
            render={(imgURL) => {
              return <img src={imgURL} alt="" className="orderlist-img" />;
            }}
          />
          <Column
            title="Title"
            dataIndex="title"
            key="title"
            render={(title) => {
              return (
                <Button type="text" className="orderlist-title">
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
          className="orderlist-amount"
        />
        <Column
          title="Price"
          dataIndex="price"
          key="price"
          className="orderlist-price"
        />
        <Column
          title="Purchase Time"
          dataIndex="time"
          key="time"
          className="orderlist-time"
        />
      </Table>
    </div>
  );
}

export default OrderList;
