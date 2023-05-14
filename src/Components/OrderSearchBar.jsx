import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function OrderSearchBar(props) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(event) {
        const value = event.target.value;
        setSearchTerm(value);
        // console.log(value);
        if(value === ""){
            props.filterOrder(value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.filterOrder(searchTerm);

    }

    return (
        <div className="order-search-container">
            <Input
                className="search-input"
                placeholder="Search by book title"
                value={searchTerm}
                onChange={handleChange}
            />
            <Link to="/">
                <Button
                    className="search-button"
                    size="middle"
                    type="text"
                    onClick={handleSubmit}
                >
                    <SearchOutlined />
                </Button>
            </Link>
        </div>
    );
}

export default OrderSearchBar;
