import React, {useEffect, useState} from "react";
import { Table, Button } from "antd";
import Orders from "../Data/Orders";

const { Column, ColumnGroup } = Table;

function OrderList() {
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        const order = JSON.parse(localStorage.getItem("order"));
        console.log("in order list: " + order);
        if (order) {
            setOrderList(order);
        }
        console.log("orderlist: " + orderList);
    }, []);

  return (
    <div className="orderlist-container">
      <h3>My Order</h3>
      <Table dataSource={orderList}>
        <ColumnGroup title="Book">
          <Column
            title="Cover"
            dataIndex="image"
            key="image"
            width="120px"
            render={(image) => {
              return <img src={image} alt="" className="orderlist-img" />;
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
