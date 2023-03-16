import React from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchBar() {

  function handleChange(event){
    const name = event.target;
    
  }


  return (
    <Search
      placeholder="input search text"
      allowClear
      onChange={handleChange}
    />
  );
}

export default SearchBar;
