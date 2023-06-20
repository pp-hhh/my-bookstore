import React, { useState } from "react";
import {Form, Button, message, Upload} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { TextField } from "@mui/material";
import {UploadImg} from "../services/imageService";

function UserProfile(props) {
  function handleChange(e){
    const {name, value} = e.target;
    props.updateUserInfo(name, value);
  }

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  // const handleUpload = (info) => {
  //   console.log(info);
  //   if (info.file.status === 'uploading') {
  //     setLoading(true);
  //     return;
  //   }
  //   if (info.file.status === 'done') {
  //     const file = info.file.originFileObj; // 获取选中的图片文件
  //     UploadImg(file) // 调用上传图片的函数，将图片信息发送给后端
  //         .then(response => {
  //           // 处理上传成功后的响应
  //           setLoading(false);
  //           const imageUrl = response.data.path; // 假设后端返回的图片路径在 response.data.path 中
  //           console.log(imageUrl);
  //           props.updateUserInfo("avatar", imageUrl);
  //         })
  //         .catch(error => {
  //           // 处理上传失败的情况
  //           setLoading(false);
  //           console.error(error);
  //         });
  //   }
  // };
  //
  // const getImgPath = (path: string) => {
  //   return `http://localhost:8080/img/${path}`;
  // };


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
                <img src={props.user.avatar} alt="" className="avatar-img" style={{height: "150px", width: "150px"}} />
              </div>
                <Button
                    type="text"
                    className="avatar-upload-btn"
                    style={{border: "none"}}
                >
                  Input Avatar Url:
                </Button>
                <TextField
                    id="standard-basic"
                    label=" "
                    // multiline
                    // row={4}
                    variant="standard"
                    name="avatar"
                    className="storage-publisher"
                    value={props.user.avatar}
                    style={{fontSize: "5px", width: "70%", fontFamily: "Montserrat"}}
                    onChange={handleChange}
                />

              {/*<div className="upload">*/}
              {/*  <Upload action="http://localhost:8080/img/upload"*/}
              {/*      listType="picture" showUploadList={false} onChange={handleUpload}>*/}
              {/*    <Button*/}
              {/*      type="text"*/}
              {/*      icon={<UploadOutlined />}*/}
              {/*      className="avatar-upload-btn"*/}
              {/*      // onClick={handleUpload}*/}
              {/*    >*/}
              {/*      Click to upload*/}
              {/*    </Button>*/}
              {/*  </Upload>*/}
              {/*</div>*/}
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
