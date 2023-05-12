import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormRow from "../Components/FormRow";
import { toast } from "react-toastify";
import "../css/login.css";
import * as userService from "../services/userService";
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

  const navigate = useNavigate();


  const callback = (data) => {
    if(data.status >= 0){
      toast.success("Register success\n Login now");
      navigate("/Login");
    }
    else{
      toast.error(data.msg);
    }
  }
  function onSubmit(e) {
    e.preventDefault();
    const { username, email, password, confirmPassword } = values;
    if (!email || !password || !username || !confirmPassword) {
      toast.error("Please fill out all fields");
      return;
    }
    if(!email.includes("@")){
      toast.error("Invalid email");
      return;
    }
    if(password !== confirmPassword){
      toast.error("Password and confirm password must be the same");
      return;
    }
    userService.register(values, callback);
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
        {/* confirmpassword */}
        <FormRow
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            handleChange={handleChange}
        />
        {/* button */}
        <button type="submit" className="login-btn btn" >
          submit
        </button>
        <p className="login-text">
          Already a member?
          <button type="link" onClick={() => {
            setValues(defaultUser);
            navigate("/Login");
          }} className="member-btn">
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default RegisterView;
