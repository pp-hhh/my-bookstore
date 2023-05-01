import React, { useState } from "react";
import { Form, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { TextField } from "@mui/material";

function UserProfile(props) {
  function handleChange(e){
    const {name, value} = e.target;
    props.updateUserInfo(name, value);
  }


  function handleClick(){
    //upload avatar

  }

  function saveClick(e){
    e.preventDefault();
    props.saveChange();
  }

  function cancelClick(){
    props.cancelChange();
  }

  return (
    <div>
      <Form name="nest-messages" className="user-form">
        <Form.Item>
          <h3>Name</h3>
          <div className="name-inputs">
            <TextField
              id="standard-basic"
              label=" "
              variant="standard"
              className="user-name"
              name="username"
              value={props.user.username}
              onChange={handleChange}
            />
          </div>
        </Form.Item>
        <Form.Item>
          <h3>Email</h3>
          <TextField
            id="standard-basic"
            variant="standard"
            label=" "
            className="user-email"
            name="email"
            value={props.user.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <div className="avatar-notes-container">
            <div className="avatar">
              <h3>Avatar</h3>
              <div className="user-avatar-img">
                <img src={props.user.avatar} alt="" className="avatar-img" />
              </div>
              <div className="upload">
                <Button
                  type="text"
                  icon={<UploadOutlined />}
                  className="upload-btn"
                  onClick={handleClick}
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
                value={props.user.notes}
                name="notes"
                onChange={handleChange}
              />
            </div>
          </div>
        </Form.Item>
      </Form>
      <div className="btn-group">
        <Button type="text" className="save-btn" onClick={saveClick}>
          Save
        </Button>
        <Button type="text" className="cancel-btn" onClick={cancelClick}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default UserProfile;
