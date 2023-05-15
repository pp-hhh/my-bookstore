import React, {useState} from 'react';
import OrderTimePicker from "./OrderTimePicker";
import {Table} from "antd";
import Column from "antd/es/table/Column";

function UserPurchaseData(props){

    const data = props.orders;

    // console.log(data);

    function filterOrderByTime(value){
        props.filterByTime(value);
    }


    return (
        <div className="orderlist-part">
            <h3>Order Data</h3>
            <OrderTimePicker filterOrder={filterOrderByTime}/>
            <div className="orderList-description" style={{marginTop: "2.5%"}}>
                <p style={{fontSize: "1rem"}}>Total Amount: {props.amount}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Total Price: ${props.price}</p>
            </div>
            <Table dataSource={data} style={{marginRight: "5%"}}>
                <Column
                    title="ID"
                    dataIndex="id"
                    key="id"
                    render={(id) => {
                        return (
                            <span style={{fontFamily: "Montserrat"}}>{id}</span>
                        )
                    }}
                />
                <Column
                    title="Title"
                    dataIndex="title"
                    key="title"
                    render={(title) => {
                        return (
                            <span style={{fontFamily: "Montserrat"}}>{title}</span>
                        )
                    }}
                />
                <Column
                    title="Cover"
                    dataIndex="cover"
                    key="cover"
                    render={(cover) => {
                        return (
                            <img src={cover} style={{width: "20%", borderRadius: "5%"}} />
                        )
                    }}
                />
                <Column
                    title="Amount"
                    dataIndex="amount"
                    key="amount"
                    render={(amount) => {
                        return (
                            <span style={{fontFamily: "Montserrat"}}>x{amount}</span>
                        )
                    }}
                />
                <Column
                    title="Price"
                    dataIndex="price"
                    key="price"
                    render={(price) => {
                        return (
                            <span style={{fontFamily: "Montserrat"}}>${price}</span>
                        )
                    }}
                />
            </Table>
        </div>
    )

}

export default UserPurchaseData;