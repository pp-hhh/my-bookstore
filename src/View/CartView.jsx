import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import HeaderInfo from "../Components/HeaderInfo";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import CartList from "../Components/CartList";
import Footer from "../Components/Footer";
import {getCartItems} from "../services/CartService";
import {toast} from "react-toastify";

const {Content} = Layout;

function CartView(){
    const location = useLocation();
    const current = location.pathname;
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user.id;

    const [cartItems, setCartItems] = useState([]);

    useEffect( () => {
        const endpoint = `http://localhost:8080/api/cart/${user_id}`;
        function callback(data){
            setCartItems(data);
        }
        getCartItems(endpoint, user_id, callback);
    },[])


    return (
        <div className="View">
            <HeaderInfo/>
            <Layout className="middle-part">
                <Layout className="body">
                <SideBar cur_key={current}/>
                <Content>
                    <CartList cartList={cartItems} user={user_id} setCart = {setCartItems}/>
                </Content>
                </Layout>
            </Layout>
            <Footer />
        </div>
    )
}

export default CartView;