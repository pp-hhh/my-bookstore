import React from 'react';
import OrderTimePicker from "../OrderTimePicker";
import {Table} from "antd";
import Column from "antd/es/table/Column";



function BookPurchaseDataList(props){
    const allOrders = props.orders;

    // console.log(allOrders);

    function filterOrderByTime(value){
        props.filterByTime(value);
    }

    return (
        <div>
            <h3>Book Sales Data</h3>
            <OrderTimePicker filterOrder={filterOrderByTime} />
            <Table dataSource={allOrders} style={{marginTop: "5%", marginRight: "5%"}}>
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
                    width="120px"
                    render={(cover) => {
                        return (
                            <img src={cover} style={{width: "20%", borderRadius: "5%"}} />
                        )
                    }}
                />
                <Column
                    title="Sale Amount"
                    dataIndex="amount"
                    key="amount"
                    sorter={(a, b) => a.amount - b.amount}
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

export default BookPurchaseDataList;