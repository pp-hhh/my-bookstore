import React, {useState} from "react";
import { Table, Button, InputNumber } from "antd";
const {Column, ColumnGroup } = Table;

function StorageList(){
    const [storageList, setStorageList] = useState([]);

    const handleDelete = (id) => {
        const newCartList = storageList.filter((item) => item.id !== id);
        setStorageList(newCartList);
        localStorage.setItem("cart", JSON.stringify(newCartList));
    };

    return (
        <div className="storage-container">
            <h3>Storage List</h3>
            <Table dataSource={storageList}>
                <ColumnGroup title="Book">
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
                        render={(title) => {
                            return (
                                <Button type="text" className="storage-title">
                                    {title}
                                </Button>
                            );
                        }}
                    />
                </ColumnGroup>
                <Column
                    title="Amount"
                    dataIndex="amount"
                    key="amount"
                    render={(amount) => {
                        return (
                            <InputNumber
                                style={{ width: "75%" }}
                                defaultValue={amount}
                                min={0}
                            />
                        );
                    }}
                />
                <Column
                    title="Price"
                    dataIndex="price"
                    key="price"
                    className="storage-price"
                />
                <Column
                    title="Action"
                    dataIndex="action"
                    key="action"
                    render={(action, book) => {
                        return action ? (
                            <Button
                                type="text"
                                className="storage-action"
                                onClick={() => handleDelete(book.id)}
                            >
                                Delete
                            </Button>
                        ) : null;
                    }}
                />
                <Column
                    title="author"
                    dataIndex="author"
                    key="author"
                    className="storage-author"
                />
                <Column
                    title="publisher"
                    dataIndex="publisher"
                    key="publisher"
                    className="storage-publisher"
                />
                <Column
                    title="ISBN"
                    dataIndex="ISBN"
                    key="ISBN"
                    className="storage-isbn"
                />
                <Column
                    title="introduction"
                    dataIndex="introduction"
                    key="introduction"
                    className="storage-introduction"
                />
            </Table>
        </div>
    )
}

export default StorageList;