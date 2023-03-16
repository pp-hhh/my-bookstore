import React from "react";
import HeaderInfo from "../Components/HeaderInfo";
import SideBar from "../Components/SideBar";
import { Layout, Form, Input, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Foot from "../Components/Foot";

const { Header, Content, Footer } = Layout;

function UserView() {
  return (
    <Layout>
      <Header className="header">
        <HeaderInfo />
      </Header>
      <Layout className="body">
        <SideBar />
        <Content>
          <Form
            name="nest-messages"
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item>
              <h3>Name</h3>
              <Input defaultValue="Tom" />
              <Input defaultValue="Cat" />
            </Form.Item>
            <Form.Item>
              <h3>Twitter</h3>
              <Input defaultValue="@TomCat" />
            </Form.Item>
            <Form.Item>
              <h3>Avatar</h3>
              <img
                src="https://ts1.cn.mm.bing.net/th/id/R-C.0019b83a5d8854ce87d9de64d1821743?rik=phTDJ7PW7W2z4w&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20110729%2f20110729120545-797437291.jpg&ehk=B%2fbLhae2KzRaw2B6cL9T7BJEfpt7QN2hZZiy8iowObc%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
              <Button type="default" icon={<UploadOutlined />}>
                Click to upload
              </Button>
              <h3>Notes</h3>
              <Input defaultValue="This is a naughty cat." />
            </Form.Item>
          </Form>
          <div>
            <Button type="default">Save</Button>
            <Button type="default">Cancel</Button>
          </div>
        </Content>
      </Layout>
      <Footer>
        <Foot />
      </Footer>
    </Layout>
  );
}

export default UserView;
