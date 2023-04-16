import React, { useState } from "react";
import FormRow from "../Components/FormRow";
import { toast } from "react-toastify";
import "../css/login.css";
import * as userService from "../services/userService";
import { Cascader } from "antd";
import { UserRole, defaultUser } from "../Data/User";

function RegisterView() {
  const [values, setValues] = useState(defaultUser);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleRoleChange(value) {
    // console.log(Number(value));
    setValues({
      ...values,
      role: Number(value),
    });
  }

  function handleClick(){
    setValues(defaultUser);
    window.location.replace("/Login");
  }

  function onSubmit(e) {
    e.preventDefault();
    const { username, email, password, isMember } = values;
    if (!email || !password || (!isMember && !username)) {
      toast.error("Please fill out all fields");
      return;
    }

    // console.log(values);
    userService.register(values);
  }

  return (
    <div className="LoginView">
      <form className="form" onSubmit={onSubmit}>
        {/* Logo */}
        <h3 className="login-title">
          Register
        </h3>
        {/* name */}
        <FormRow
          type="text"
          name="username"
          value={values.username}
          handleChange={handleChange}
        />
        {/* email */}
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
        {/* password */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        {/* role */}
        <div className="form-row">
          <label htmlFor="role" className='form-label'>
            Role
          </label>
          <Cascader options={UserRole} placeholder="select your role" className="role-selector" onChange={handleRoleChange}/>
        </div>
        {/* button */}
        <button type="submit" className="login-btn btn">
          submit
        </button>
        <p className="login-text">
          Already a member?
          <button type="link" onClick={handleClick} className="member-btn">
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default RegisterView;
