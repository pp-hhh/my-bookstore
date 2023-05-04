import React, {useState} from "react";
import { Table, Button, InputNumber, Checkbox } from "antd";
import "../../css/adminView.css";
import {Link} from "react-router-dom";
const {Column, ColumnGroup } = Table;

function StorageList(props){
    const storageList = props.storageList;

    return (
        <div className="storage-container">
            <h3>Storage List</h3>
            <Table dataSource={storageList}>
                <Column
                    title="Cover"
                    dataIndex="image"
                    key="image"
                    width="120px"
                    render={(image) => {
                        return <img src={image} alt="" className="storage-img" />;
                    }}
                />
                <Column
                    title="Title"
                    dataIndex="title"
                    key="title"
                    className="storage-title"
                />
                <Column
                    title="Quantity"
                    dataIndex="stock"
                    key="quantity"
                    className="storage-quantity"
                />
                <Column
                    title="Price"
                    dataIndex="price"
                    key="price"
                    className="storage-price"
                    render={(price) => {
                        return <span>${price}</span>;
                        }
                    }
                />
                <Column
                    title="Action"
                    dataIndex="action"
                    key="action"
                    render={(_, item) => {
                        return (
                            <Link to={`/Storage/${item.id}`}>
                                <Button type="text" className="storage-action">
                                    Click to Modify
                                </Button>
                            </Link>
                        )
                    }}
                />
            </Table>
        </div>
    )
}

export default StorageList;