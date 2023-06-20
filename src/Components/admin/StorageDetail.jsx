import React from "react";
import { TextField } from "@mui/material";
import { Form, Button } from "antd";
import {SearchOutlined, UploadOutlined} from "@ant-design/icons";
import "../../css/adminView.css"
import {Link} from "react-router-dom";


function StorageDetail(props){
    const bookStorage = props.storage;

    function handleChange(e){
        const {name, value} = e.target;
        if(String(name) === "price"){
            const price = value.replace(/^\$/, "");
            console.log(price);
            props.updateBookInfo(name, price);
        }else{
            props.updateBookInfo(name, value);
        }

    }

    function saveClick(e){
        e.preventDefault();
        props.saveChange();
    }

    function cancelClick(){
        props.cancelChange();
    }



    return (
        <div>
            <Link to="/">
                <Button type="text" icon={<SearchOutlined />} className="back-btn">
                    Back
                </Button>
            </Link>
        <div className="bookstorage-container">
            <div className="bookimg">
                <img src={bookStorage.image} alt="" className="bookstorage-img"/>
                <Button
                    type="text"
                    // icon={<UploadOutlined />}
                    className="upload-btn"
                    style={{border: "none"}}
                    // onClick={props.}
                >
                    Input Cover Url:
                </Button>
                <TextField
                    id="standard-basic"
                    label=" "
                    variant="standard"
                    name="image"
                    className="storage-publisher"
                    value={bookStorage.image}
                    style={{fontSize: "15px"}}
                    onChange={handleChange}
                />
            </div>
            <div className="book-basic-info">
                <Form name="nest-messages" className="storage-form">
                    <Form.Item>
                        <div className="title-inputs">
                            <span className="storage-tag">Title</span>
                            <TextField
                                id="standard-basic"
                                label=" "
                                variant="standard"
                                className="storage-title"
                                name="title"
                                value={bookStorage.title}
                                style={{fontSize: "15px"}}
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className="author-inputs">
                            <span className="storage-tag">Author</span>
                            <TextField
                                id="standard-basic"
                                label=" "
                                variant="standard"
                                name="author"
                                className="storage-author"
                                value={bookStorage.author}
                                style={{fontSize: "15px"}}
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className="publisher-inputs">
                            <span className="storage-tag">Publisher</span>
                            <TextField
                                id="standard-basic"
                                label=" "
                                variant="standard"
                                name="publisher"
                                className="storage-publisher"
                                value={bookStorage.publisher}
                                style={{fontSize: "15px"}}
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className="publisher-inputs">
                            <span className="storage-tag">ISBN</span>
                            <TextField
                                id="standard-basic"
                                label=" "
                                variant="standard"
                                name="isbn"
                                className="storage-publisher"
                                value={bookStorage.isbn}
                                style={{fontSize: "15px"}}
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className="stock-inputs">
                            <span className="storage-tag">Stock</span>
                            <TextField
                                id="standard-number"
                                label=" "
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={bookStorage.stock}
                                variant="standard"
                                name="stock"
                                className="storage-stock"
                                style={{fontSize: "15px"}}
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className="price-inputs">
                            <span className="storage-tag">Price</span>
                            <TextField
                                id="standard-basic"
                                label=" "
                                variant="standard"
                                className="storage-price"
                                name="price"
                                value={`$${bookStorage.price}`}
                                style={{fontSize: "15px"}}
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Item>
                </Form>
            </div>
            <Form.Item>
                <div className="book-intro">
                    <span className="storage-intro-tag">Notes</span>
                    <TextField
                        id="outlined-multiline-static"
                        label=" "
                        multiline
                        row={4}
                        variant="standard"
                        className="storage-introduction"
                        value={`${bookStorage.introduction}`}
                        name="introduction"
                        inputProps={{ style: { width: '100%', fontSize: '15px' } }}
                        onChange={handleChange}
                    />
                </div>
            </Form.Item>
            <div className="btn-group">
                <Button type="text" className="save-btn" onClick={saveClick}>
                    Save
                </Button>
                <Button type="text" className="cancel-btn" onClick={cancelClick}>
                    Cancel
                </Button>
            </div>
        </div>
        </div>
    )

}

export default StorageDetail;