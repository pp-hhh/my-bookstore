import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
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

  function handleClick(){
    setValues(initialState);
    window.location.replace("/Register");
  }

  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const {username, password, isMember} = values;
    if (!password || (!isMember && !username)) {
      toast.error("Please fill out all fields");
      return;
    }

    userService.login({username, password});
  }

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
          Not a member?
          <button type="link" onClick={handleClick} className="member-btn">
            Register
          </button>
        </p>
      </form>
    </div>
  );
}

export default LogView;
