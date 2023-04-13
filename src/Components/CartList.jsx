import React, { useState, useEffect } from "react";
import { Table, Button, InputNumber } from "antd";
import carts from "../Data/cart";

const { Column, ColumnGroup } = Table;

function CartList() {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    // 从本地存储获取购物车列表，并设置组件状态中的列表数据
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log("in cart list: " + cart);
    if (cart) {
      setCartList(cart);
    }
  }, []);

  // 删除购物车中的书籍，并更新本地存储中的购物车信息
  const handleDelete = (id) => {
    const newCartList = cartList.filter((item) => item.id !== id);
    setCartList(newCartList);
    localStorage.setItem("cart", JSON.stringify(newCartList));
  };

  return (
    <div className="cartlist-container">
      <h3>My Shopping Cart</h3>
      <Table dataSource={cartList}>
        <ColumnGroup title="Book">
          <Column
            title="Cover"
            dataIndex="image"
            key="image"
            width="120px"
            render={(image) => {
              return <img src={image} alt="" className="cartlist-img" />;
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
          render={(action, book) => {
            return action ? (
              <Button
                type="text"
                className="cartlist-action"
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </Button>
            ) : null;
          }}
        />
      </Table>
    </div>
  );
}

export default CartList;
