import React from "react";
import {useLocation} from "react-router-dom";
import HeaderInfo from "../Components/HeaderInfo";
import { Layout } from "antd";
import SideBar from "../Components/SideBar";
import CartList from "../Components/CartList";
import Footer from "../Components/Footer";

const {Content} = Layout;

function CartView(){
    const location = useLocation();
    const current = location.pathname;

    return (
        <div className="View">
            <HeaderInfo/>
            <Layout className="middle-part">
                <Layout className="body">
                <SideBar cur_key={current}/>
                <Content>
                    <CartList/>
                </Content>
                </Layout>
            </Layout>
            <Footer />
        </div>
    )
}

export default CartView;