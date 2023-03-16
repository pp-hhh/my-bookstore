import React from "react";
import { Layout, Table, Button, InputNumber } from "antd";
import HeaderInfo from "../Components/HeaderInfo";
import SearchBar from "../Components/SearchBar";
import SideBar from "../Components/SideBar";
import carts from "../Data/cart";

const { Header, Content, Footer } = Layout;
const { Column, ColumnGroup } = Table;

function CartView() {
  return (
    <Layout>
      <Header className="header">
        <HeaderInfo />
      </Header>
      <Layout>
        <SideBar />
        <Content>
          <h3>My Shopping Cart</h3>
          <SearchBar />
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
                    style={{
                      width: "100%",
                    }}
                    defaultValue={amount}
                    min={0}
                  />
                );
              }}
            />
            <Column title="Price" dataIndex="price" key="price" />
            <Column title="Action" dataIndex="action" key="action" render={(action) => {
              return (
                action ? <Button type="dashed">Delete</Button> : null
              )
            }} />
          </Table>
        </Content>
      </Layout>
    </Layout>
  );
}

export default CartView;
