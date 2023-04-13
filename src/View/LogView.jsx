import React, {useEffect, useState} from "react";
import FormRow from "../Components/FormRow";
import { toast } from "react-toastify";
import "../css/login.css";
import * as userService from "../services/userService";

const initialState = {
  username: "",
  email: "",
  password: "",
  isMember: true,
};

function LogView() {
  const [values, setValues] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function toggleMember() {
    setValues({ ...values, isMember: !values.isMember });
  }

  function onSubmit(e) {
    e.preventDefault();
    const {username, password, isMember} = values;
    if (!password || (!isMember && !username)) {
      toast.error("Please fill out all fields");
      return;
    }

    userService.login(username, password);
  }

  //   const endpoint = "http://localhost:8080/Login";
  //   const body = { username, password };
  //
  //   fetch(endpoint, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(body),
  //     origin: 'http://localhost:3000'
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     // 处理后端返回的数据
  //     if (data.message === "OK") {
  //       // 登录成功，跳转到用户主页
  //       window.location.href = '/Home';
  //     } else {
  //       // 登录失败，显示错误消息
  //       toast.error(data.message);
  //     }
  //   })
  //   .catch(error => {
  //     // 处理请求发生错误的情况
  //     console.error(error);
  //     toast.error('An error occurred while sending the request.');
  //   });
  // }

  return (
    <div className="LoginView">
      <form className="form" onSubmit={onSubmit}>
        {/* Logo */}
        <h3 className="login-title">
          {values.isMember ? "Login" : "Register"}
        </h3>
        {/* name */}
        <FormRow
          type="text"
          name="username"
          value={values.username}
          handleChange={handleChange}
        />
        {/* password */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        {/* button */}
        <button type="submit" className="login-btn btn">
          submit
        </button>
        <p className="login-text">
          {values.isMember ? "Not a member?" : "Already a member?"}
          <button type="link" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
}

export default LogView;
