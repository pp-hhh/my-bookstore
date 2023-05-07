import React, {useEffect, useState} from "react";
import { Table, Button } from "antd";
import "../css/order.css";

const { Column, ColumnGroup } = Table;

function OrderItem(props) {
    let orderItem = JSON.stringify(props.orderItem);
    let total_price = JSON.parse(orderItem).total_price;
    total_price = total_price.toFixed(2);
    let purchase_time = JSON.parse(orderItem).time;
    // console.log(purchase_time);
    orderItem = JSON.parse(orderItem).orderItemForms;


  return (
    <div className="orderlist-container">
        <div className="orderList-description">
            <p>Purchase Time: {purchase_time} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Total Price: ${total_price}</p>
        </div>
      <Table dataSource={orderItem} showHeader={false} pagination={false} className="orderItem">
      <Column
        title="Cover"
        dataIndex="book_cover"
        key="book_cover"
        width="120px"
        render={(image) => {
          return <img src={image} alt="" className="orderlist-img" />;
        }}
      />
      <Column
        title="Title"
        dataIndex="book_title"
        key="book_title"
        render={(title) => {
          return (
            <Button type="text" className="orderlist-title">
              {title}
            </Button>
          );
        }}
      />
        <Column
          title="Amount"
          dataIndex="amount"
          key="amount"
          className="orderlist-amount"
          render={(amount) => {
            return <span>x{amount}</span>;
          }}
        />
        <Column
          title="Price"
          dataIndex="book_price"
          key="book_price"
          className="orderlist-price"
          render={(price) => {
            return <span>${price} /per book</span>;
          }}
        />
      </Table>
    </div>
  );
}

export default OrderItem;
