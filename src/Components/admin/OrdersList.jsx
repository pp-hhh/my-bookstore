import React, {useState} from 'react';
import {List, Select} from "antd";
import AdminOrderItem from "./AdminOrderItem";
import OrderSearchBar from "../OrderSearchBar";
import OrderTimePicker from "../OrderTimePicker";

function OrdersList(props){
    const allOrders = props.orders;

    const position = "bottom",
        align = "center";

    const [selectOption, setSelectOption] = useState(0);

    function filterOrderByTitle(searchContent){
        props.filterByTitle(searchContent);
    }

    function filterOrderByTime(value){
        props.filterByTime(value);
    }

    return (
        <div>
            <h3>All Orders</h3>
            <div style={{display: "flex", alignItems: "center", marginBottom: "30px"}}>
                <Select
                    defaultValue="Filter by book title"
                    dropdownMatchSelectWidth={false}
                    placement="bottomLeft"
                    options={[
                        {
                            value: 0,
                            label: 'Filter by book title'
                        },
                        {
                            value: 1,
                            label: 'Filter by order time',
                        },
                    ]}
                    className="order-selector"
                    onChange={(value) => {
                        setSelectOption(value);
                    }
                    }
                />
                {selectOption === 0 ? <OrderSearchBar filterOrder={filterOrderByTitle} /> :
                    <OrderTimePicker filterOrder={filterOrderByTime} />}
            </div>
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