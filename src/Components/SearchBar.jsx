import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import Books from "../Data/Books";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

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
    <div>
      <Input
        placeholder="Input book name here."
        value={searchTerm}
        onChange={handleChange}
      />
      <Button type="primary" onClick={handleSubmit}>
        <SearchOutlined />
      </Button>
    </div>
  );
}

export default SearchBar;
