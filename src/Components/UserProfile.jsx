import React from "react";
import { Form, Input, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import User from "../Data/User";

function UserProfile(props) {
  const user = User.find((item) => {
    return item.key === props.user_id;
  });

  return (
    <div>
      <Form
        name="nest-messages"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item>
          <h3>Name</h3>
          <Input defaultValue={user.Name.fName} />
          <Input defaultValue={user.Name.lName} />
        </Form.Item>
        <Form.Item>
          <h3>Twitter</h3>
          <Input defaultValue={user.Twitter} />
        </Form.Item>
        <Form.Item>
          <h3>Avatar</h3>
          <img src={user.Avatar} alt="" />
          <Button type="default" icon={<UploadOutlined />}>
            Click to upload
          </Button>
          <h3>Notes</h3>
          <Input defaultValue={user.Notes} />
        </Form.Item>
      </Form>
      <div>
        <Button type="default">Save</Button>
        <Button type="default">Cancel</Button>
      </div>
    </div>
  );
}

export default UserProfile;
