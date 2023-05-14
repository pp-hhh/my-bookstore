import React, {useState} from "react";
import {Button, List, Select} from "antd";
import OrderItem from "./OrderItem";
import SearchBar from "./SearchBar";
import OrderSearchBar from "./OrderSearchBar";
import OrderTimePicker from "./OrderTimePicker";

function OrderList(props){
    let orderLists = props.orderList;

    const [selectOption, setSelectOption] = useState(0);

    // console.log(orderLists);

    function filterOrderByTitle(searchContent){
        props.filterByTitle(searchContent);
    }

    function filterOrderByTime(value){
        props.filterByTime(value);
    }


    const position = "bottom",
        align = "center";

    return (
        <div className="orderlist-part">
            <h3>My Order</h3>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: "30px" }}>
                <Select
                    defaultValue="Filter by book title"
                    dropdownMatchSelectWidth={false}
                    placement="bottomLeft"
                    options={[
                        {
                            value: 0,
                            label: 'Filter by book title',
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
                {selectOption === 0 ? <OrderSearchBar filterOrder={filterOrderByTitle}/> :
                    <OrderTimePicker filterOrder={filterOrderByTime}/>}
            </div>
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