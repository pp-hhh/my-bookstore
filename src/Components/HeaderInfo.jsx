import React, { useState } from "react";
import "../css/index.css";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import * as UserService from "../services/userService";

function HeaderInfo(props) {

  function handleSearch(searchContent) {
    props.searchClick(searchContent);
  }
  const [showLogout, setShowLogout] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));

  function handleLogout() {
    UserService.logout();
  }

  function handleUserClick() {
    setShowLogout(!showLogout);
    // console.log(showLogout);
  }


  return (
    (<div>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          Booksy
        </Link>
        {props.current === "/" || props.current === "/Home" ? (
        <SearchBar filterBook={handleSearch} />
        ) : null}
        <div className='user-btn-container'>
          <button
              type='button'
              className='user-btn'
              onClick={handleUserClick}
          >
            <UserAvatar img={JSON.parse(user).avatar} />
            {user? JSON.parse(user).username : ""}
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
                type='button'
                className='dropdown-btn'
                onClick={handleLogout}
            >
              logout
            </button>
          </div>
          </div>
      </nav>
    </div>)
  );
}

export default HeaderInfo;
