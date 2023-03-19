import React, { useState } from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setSearchTerm(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onClick(searchTerm);
  }

  return (
    <div className="search-container">
      <Input
        className="search-input"
        placeholder="Search by author, title"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button
        className="search-button"
        size="middle"
        type="text"
        onClick={handleSubmit}
      >
        <SearchOutlined />
      </Button>
    </div>
  );
}

export default SearchBar;
