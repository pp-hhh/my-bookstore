import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button, InputNumber, Checkbox } from "antd";
import "../../css/adminView.css";
import {Link} from "react-router-dom";
import {addStorageItem, deleteStorageItem} from "../../services/adminService";
const {Column, ColumnGroup } = Table;

function StorageList(props){
    const storageList = props.storageList;


    function handleDelete(id){
        const url =  `http://localhost:8080/storage/delete/${id}`;
        deleteStorageItem(url, {}, (data) => props.setStorages(data)).then(window.location.reload);
    }

    const navigate = useNavigate();

    function handleClick(){
        navigate("/Storage/add");
    }

    return (
        <div className="storage-container">
            <div style={{display: "flex"}}>
                <h3>Storage List</h3>
                <Button type="text" onClick={handleClick} className="add-btn">Add new book</Button>
            </div>

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
                <Column
                    title="Delete"
                    dataIndex="id"
                    key="id"
                    render={(id) => {
                        return (
                            <Button type="text" onClick={() => handleDelete(id)} className="delete-action" >Delete</Button>
                        )
                    }
                    }
                />
            </Table>
        </div>
    )
}

export default StorageList;