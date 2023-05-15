import React from 'react';
import OrderTimePicker from "../OrderTimePicker";
import {List, Table} from "antd";
import Column from "antd/es/table/Column";


function UserPurchaseDataList(props){
    const allOrders = props.orders;

    function filterOrderByTime(value){
        props.filterByTime(value);
    }

    return (
        <div>
            <h3>User Purchase Data</h3>
            <OrderTimePicker filterOrder={filterOrderByTime} />
            <Table dataSource={allOrders} style={{marginTop: "5%", marginRight: "5%"}} >
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
                    title="User Name"
                    dataIndex="username"
                    key="username"
                    render={(username) => {
                        return (
                            <span style={{fontFamily: "Montserrat"}}>{username}</span>
                        )
                    }}
                />
                <Column
                    title="Total Purchase Price"
                    dataIndex="total_price"
                    key="total_price"
                    width="40%"
                    sorter={(a, b) => a.total_price - b.total_price}
                    render={(total_price) => {
                        return (
                            <span style={{fontFamily: "Montserrat"}}>${total_price}</span>
                        )
                    }}
                />
            </Table>
        </div>
    )
}


export default UserPurchaseDataList;