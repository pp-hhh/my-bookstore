import React from "react";
import { Table, Button } from "antd";
import Orders from "../Data/Orders";

const { Column, ColumnGroup } = Table;

function OrderList() {
  return (
    <div>
      <Table dataSource={Orders}>
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
        <Column title="Amount" dataIndex="amount" key="amount" />
        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Purchase Time" dataIndex="time" key="time" />
      </Table>
    </div>
  );
}

export default OrderList;
