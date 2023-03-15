import React from "react";
import { Input } from "antd";

const { Search } = Input;
const onSearch = (value) => console.log(value);

function SearchBar() {
  return (
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
    />
  );
}

export default SearchBar;
