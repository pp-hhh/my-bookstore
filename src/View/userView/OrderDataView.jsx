import React, {useEffect, useState} from 'react';
import HeaderInfo from "../../Components/HeaderInfo";
import {Layout} from "antd";
import SideBar from "../../Components/SideBar";
import {Content} from "antd/es/layout/layout";
import UserPurchaseDataList from "../../Components/admin/UserPurchaseDataList";
import UserPurchaseData from "../../Components/UserPurchaseData";
import {getOrders} from "../../services/OrderService";


function OrderDataView(){
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user.id;

    const [orderitems, setOrderitems] = useState([]);
    const [amountData, setAmountData] = useState([]);
    const [initialAmountData, setInitialAmountData] = useState([]); //for filter
    const [totalAmount, setTotalAmount] = useState(0);
    const [initialTotalAmount, setInitialTotalAmount] = useState(0); //for filter
    const [totalPrice, setTotalPrice] = useState(0);
    const [initialTotalPrice, setInitialTotalPrice] = useState(0); //for filter

    useEffect(() => {
        const endpoint = `http://localhost:8080/order/${user_id}`;

        function callback(data){
            let items = [];
            for(let i = 0; i < data.length; ++i){
                let order = data[i].orderItemForms;
                let time = data[i].time;
                for(let j = 0; j < order.length; ++j){
                    let item = order[j];
                    item.time = time;
                    //add item to items
                    items.push(item);
                }
            }
            setOrderitems(items);

            //calculate amount data
            let amountData = {};
            let totalAmount = 0, totalPrice = 0;
            for(let i = 0; i < items.length; ++i){
                let item = items[i];
                let id = item.book_id;
                if(!amountData[id]){
                    amountData[id] = {
                        id: id,
                        amount: 0,
                        title: item.book_title,
                        cover: item.book_cover,
                        price: item.book_price
                    }
                }
                amountData[id].amount += item.amount;
                totalAmount += item.amount;
                totalPrice += item.amount * item.book_price;
            }
            setTotalAmount(totalAmount);
            setInitialTotalAmount(totalAmount);
            setTotalPrice(totalPrice);
            setInitialTotalPrice(totalPrice);
            setAmountData(Object.values(amountData));
            setInitialAmountData(Object.values(amountData));
        }

        getOrders(endpoint, callback).then();
    }, [])


    function filterByTime(value){
        if(value[0] === null && value[1] === null){
            setTotalPrice(initialTotalPrice);
            setTotalAmount(initialTotalAmount);
            setAmountData(initialAmountData);
            return;
        }

        let startTime = new Date(value[0]).getTime();
        let endTime = new Date(value[1]).getTime();

        let amountData = {};
        let amount = 0, price = 0;
        for(let i = 0; i < orderitems.length; ++i){
            let item = orderitems[i];
            let id = item.book_id;
            let time = new Date(item.time).getTime();
            if(time < startTime || time > endTime) continue;
            if(!amountData[id]){
                amountData[id] = {
                    id: id,
                    amount: 0,
                    title: item.book_title,
                    cover: item.book_cover,
                    price: item.book_price
                }
            }
            amountData[id].amount += item.amount;
            amount += item.amount;
            price += item.amount * item.book_price;
        }
        setAmountData(Object.values(amountData));
        setTotalAmount(amount);
        setTotalPrice(price);
    }

    return (
        <div className="View">
            <HeaderInfo />
            <Layout className="middle-part">
                <Layout className="body">
                    <SideBar cur_key="/Data" />
                    <Content>
                        <UserPurchaseData orders={amountData} amount={totalAmount} price={totalPrice} filterByTime={filterByTime}/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default OrderDataView;