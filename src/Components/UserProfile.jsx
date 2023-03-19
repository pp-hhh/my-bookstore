import React from "react";
import { Form, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import User from "../Data/User";
import { TextField } from "@mui/material";

function UserProfile(props) {
  const user = User.find((item) => {
    return item.key === props.user_id;
  });

  return (
    <div>
      <Form name="nest-messages" className="user-form">
        <Form.Item>
          <h3>Name</h3>
          <div className="name-inputs">
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              className="user-fname"
              defaultValue={user.Name.fName}
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              className="user-lname"
              defaultValue={user.Name.lName}
            />
          </div>
        </Form.Item>
        <Form.Item>
          <h3>Twitter</h3>
          <TextField
            id="standard-basic"
            variant="standard"
            label=" "
            className="user-twitter"
            defaultValue={user.Twitter}
          />
        </Form.Item>
        <Form.Item>
          <div className="avatar-notes-container">
            <div className="avatar">
              <h3>Avatar</h3>
              <div className="user-avatar-img">
                <img src={user.Avatar} alt="" className="avatar-img" />
              </div>
              <div className="upload">
                <Button
                  type="text"
                  icon={<UploadOutlined />}
                  className="upload-btn"
                >
                  Click to upload
                </Button>
              </div>
            </div>
            <div className="notes">
              <h3>Notes</h3>
              <TextField
                id="outlined-multiline-static"
                label=" "
                multiline
                row={4}
                variant="standard"
                className="user-notes note"
                defaultValue={user.Notes}
              />
            </div>
          </div>
        </Form.Item>
      </Form>
      <div className="btn-group">
        <Button type="text" className="save-btn">
          Save
        </Button>
        <Button type="text" className="cancel-btn">
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default UserProfile;
