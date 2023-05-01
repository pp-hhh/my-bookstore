import React, { useState, useEffect } from "react";
import { Table, Button, InputNumber, Checkbox } from "antd";
import {deleteCartItem, purchaseCartItems, updateCartItem} from "../services/CartService";
import "../css/cart.css";
import {toast} from "react-toastify";
const { Column, ColumnGroup } = Table;

function CartList(props) {
    const cartList = props.cartList;
    const [action, setAction] = useState(true);
    const user_id = props.user;

  const handleDelete = (id) => {
    const url = `http://localhost:8080/api/cart/delete/${user_id}/${id}`;
    deleteCartItem(url, {}, (data) => props.setCart(data)).then(window.location.reload);
  };

  function handleNumberChange(value, id){
      // console.log(value, id);
      const url = `http://localhost:8080/api/cart/update/${user_id}/${id}`;
      const number_data = {
          number: value
      }
      updateCartItem(url, value, (data) => props.setCart(data)).then(window.location.reload);
  }

  const [toBuyItems, setToBuyItems] = useState([]);

  function cartPurchase(){
      if(toBuyItems.length === 0){
          toast.error("Please select at least one item to purchase");
      }else{
          // console.log(JSON.stringify(toBuyItems));
          const url = `http://localhost:8080/api/cart/purchase/${user_id}`;
          function callback(data){
              props.setCart(data);
          }
          purchaseCartItems(url, toBuyItems, callback).then();
      }
  }

  return (
    <div className="cartlist-container">
      <h3>My Shopping Cart</h3>
      <Table dataSource={cartList} >
          <Column
              title="Select"
              dataIndex="cart_item_id"
              key="cart_item_id"
              value={false}
              render={(_, cart_item) => {
                  return (
                      <Checkbox
                          onChange={(e) => {
                              if(e.target.checked){
                                  setToBuyItems([...toBuyItems, cart_item]);
                              }else{
                                    setToBuyItems(toBuyItems.filter((item) => item !== cart_item));
                              }
                          }
                          }
                      />
                  )
                }
                }
          />
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
          dataIndex="number"
          key="number"
          render={(number, cart_item) => {
            return (
              <InputNumber
                style={{ width: "75%" }}
                defaultValue={number}
                min={0}
                onChange={(value) => handleNumberChange(value, cart_item.cart_item_id)}
              />
            );
          }}
        />
        <Column
          title="Price"
          dataIndex="price"
          key="price"
          className="cartlist-price"
          render={(price, cart_item) => {
              return (
                    <span>
                        ${price * cart_item.number}
                    </span>
              )
          }}
        />
        <Column
          title="Action"
          dataIndex="cart_item_id"
          key="cart_item_id"
            render={(cart_item_id) => {
                return (
                    <Button
                        type="text"
                        className="cartlist-action"
                        onClick={() => handleDelete(cart_item_id)}
                    >
                        Delete
                    </Button>
                )
            }}
        />
      </Table>
        <div className="cart-btn-group">
            <Button type="text" className="cart-purchase-btn" onClick={cartPurchase}>
                Purchase Now
            </Button>
        </div>
    </div>
  );
}

export default CartList;
