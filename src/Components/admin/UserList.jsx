import React from 'react';
import {Table, Badge, Button, Modal, Radio} from "antd";
import {updateUserRole} from "../../services/adminService";

const { Column, ColumnGroup } = Table;

function UserList(props){
    const userList = props.users;

    function handleChange(e, id){
        const role_value = e.value;
        const user_id = id;

        const url = `http://localhost:8080/user/setRole/${user_id}`;

        updateUserRole(url, role_value, (data) => {props.setUsers(data)}).then(window.location.reload);
    }


    return (
        <div className="userlist-container">
            <h3>All Users</h3>
            <Table dataSource={userList}>
                <Column
                    title="UserName"
                    dataIndex="username"
                    key="username"
                    className="user-content"
                />
                <Column
                    title="Avatar"
                    dataIndex="avatar"
                    key="avatar"
                    render={(_, userInfo) => {
                        return (
                            <img src={userInfo.avatar} alt="avatar" style={{width: "35px"}} />
                        )
                        }
                    }
                />
                <Column
                    title="Email"
                    dataIndex="email"
                    key="email"
                    className="user-content"
                />
                <Column
                    title="Role"
                    dataIndex="role"
                    key="role"
                    // className="user-content"
                    render={(_, userInfo) => {
                        return (
                            <Radio.Group value={Number(userInfo.role)} className="user-content" onChange={handleChange(e, userInfo.id)}>
                                <Radio value={0}>User</Radio>
                                <Radio value={1}>Admin</Radio>
                            </Radio.Group>
                        )
                    }}
                />
            </Table>
        </div>
    )
}

export default UserList;