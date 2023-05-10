import React from 'react';
import {List} from "antd";
import AdminOrderItem from "./AdminOrderItem";

function OrdersList(props){
    const allOrders = props.orders;

    const position = "bottom",
        align = "center";

    return (
        <div>
            <h3>All Orders</h3>
            <List
                pagination={{
                    position,
                    align
                }}
                grid={{
                    column: 1
                }}
                dataSource={allOrders}
                renderItem={(orderItem) => (
                    <List.Item>
                        <AdminOrderItem orderItem={orderItem} />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default OrdersList;