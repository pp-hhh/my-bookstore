import React from "react";
import {List} from "antd";
import OrderItem from "./OrderItem";

function OrderList(props){
    let orderLists = props.orderList;


    const position = "bottom",
        align = "center";

    return (
        <div>
            <h3>My Order</h3>
            <List
                pagination={{
                    position,
                    align,
                }}
                grid={{
                    column: 1
                }}
                dataSource={orderLists}
                renderItem={(orderItem) => (
                    <List.Item>
                        <OrderItem orderItem={orderItem} />
                    </List.Item>
                )}
            />
        </div>

    )
}

export default OrderList;