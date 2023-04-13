import React from "react";
import "../css/index.css";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function HeaderInfo(props) {
  const user_id = 0;

  function handleSearch(searchContent) {
    props.searchClick(searchContent);
  }

  return (
    (<div>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          Booksy
        </Link>
        <SearchBar onClick={handleSearch} />
        <UserAvatar id={user_id} />
      </nav>
    </div>)
  );
}

export default HeaderInfo;
