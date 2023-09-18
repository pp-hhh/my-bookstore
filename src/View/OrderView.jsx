import React, {useEffect, useState} from "react";
import HeaderInfo from "../Components/HeaderInfo";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import OrderItem from "../Components/OrderItem";
import Footer from "../Components/Footer";
import {getOrders} from "../services/OrderService";
import OrderList from "../Components/OrderList";

const { Content } = Layout;

function OrderView() {
  const location = useLocation();
  const current = location.pathname;
  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = user.id;

  const [orders, setOrders] = useState([]);
  const [initialOrders, setInitialOrders] = useState([]);

  useEffect(() => {
      const endpoint = `http://localhost:8080/order/${user_id}`;
      function callback(data){
          data.sort((a, b) => new Date(b.time) - new Date(a.time));
          setOrders(data);
          setInitialOrders(data);
      }
      getOrders(endpoint, callback).then();
  }, [])


    function searchByTitle(searchInput){
      if(searchInput === ""){
            setOrders(initialOrders);
            return;
      }
      let newlist = [];

      for(let i = 0; i < initialOrders.length; ++i){
          let order = initialOrders[i].orderItemForms;
          // console.log(order);
          for(let j = 0; j < order.length; ++j){
              if(order[j].book_title.toLowerCase().includes(searchInput.toLowerCase())){
                  newlist.push(initialOrders[i]);
                  break;
              }
          }
      }
        setOrders(newlist);
    }

    function searchByTime(searchInput){
      if(searchInput[0] === null && searchInput[1] === null) {
            setOrders(initialOrders);
            return;
      }

      let startTime = new Date(searchInput[0]).getTime();
      let endTime = new Date(searchInput[1]).getTime();

        let newlist = [];
        for(let i = 0; i < initialOrders.length; ++i){
            // let order = orders[i].orderItemForms;
            let orderTime = new Date(initialOrders[i].time).getTime();
            if(orderTime >= startTime && orderTime <= endTime){
                newlist.push(initialOrders[i]);
            }
        }
        setOrders(newlist);
    }


    return (
    <div className="View">
      <HeaderInfo current={current} />
      <Layout className="middle-part">
        <Layout className="body">
          <SideBar cur_key={current} />
          <Content>
              <OrderList orderList={orders} filterByTitle={searchByTitle} filterByTime={searchByTime} />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default OrderView;
