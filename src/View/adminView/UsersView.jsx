import React, {useEffect, useState} from 'react';
import AdminSideBar from "../../Components/admin/AdminSideBar";
import HeaderInfo from "../../Components/HeaderInfo";
import {Layout} from "antd";
import {useLocation} from "react-router-dom";
import UserList from "../../Components/admin/UserList";
import {getAllUsers} from "../../services/adminService";

const {Content} = Layout;

function UsersView(props){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const url = "http://localhost:8080/api/users";

        function callback(data){
            setUsers(data);
        }
        getAllUsers(url, callback);
    }, [])


    function updateUsers(data){
        setUsers(data);
    }


    const location = useLocation();
    const current = location.pathname;

    return (
        <div className="View">
            <HeaderInfo />
            <Layout className="middle-part">
                <Layout className="body">
                    <AdminSideBar cur_key={current} />
                    <Content>
                        <UserList users={users} setUsers={updateUsers} />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default UsersView;