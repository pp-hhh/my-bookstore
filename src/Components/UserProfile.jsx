import React, { useState, useEffect } from "react";
import { Form, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { TextField } from "@mui/material";

function UserProfile(props) {
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
              defaultValue={props.user.username}
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              className="user-lname"
              defaultValue={props.user.username}
            />
          </div>
        </Form.Item>
        <Form.Item>
          <h3>Email</h3>
          <TextField
            id="standard-basic"
            variant="standard"
            label=" "
            className="user-twitter"
            defaultValue={props.user.email}
          />
        </Form.Item>
        <Form.Item>
          <div className="avatar-notes-container">
            <div className="avatar">
              <h3>Avatar</h3>
              <div className="user-avatar-img">
                <img src={props.user.Avatar} alt="" className="avatar-img" />
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
                defaultValue={props.user.Notes}
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
