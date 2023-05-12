import React, {useState} from 'react';
import {Table, Badge, Button, Modal, Radio} from "antd";
import {updateUserRole, updateUserStatus} from "../../services/adminService";
import "../../css/adminView.css";

const { Column, ColumnGroup } = Table;

function UserList(props){
    const userList = props.users;
    // console.log(userList);

    const[isModalOpen, setIsModalOpen] = useState(false);
    const[ok_or_cancel, setOkOrCancel] = useState(false);


    const[status, setStatus] = useState(false); // 0: unblocked, 1: blocked
    const[user_id, setUserId] = useState(0);

    function handleChange(e, id){
        const block_or_not = e.target.value;

        setIsModalOpen(true);
        setUserId(id);
        setStatus(block_or_not);

        // const url = `http://localhost:8080/user/setStatus/${id}`;
        // updateUserStatus(url, block_or_not, (data) => {props.setUsers(data)}).then();
    }

    function handleOk(){
        setIsModalOpen(false);
        setOkOrCancel(true);
        console.log(status);
        const url = `http://localhost:8080/user/setStatus/${user_id}`;
        updateUserStatus(url, status, (data) => {props.setUsers(data)}).then();
    }

    function handleCancel(){
        setIsModalOpen(false);
        setOkOrCancel(false);
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
                    title="Status"
                    dataIndex="blocked"
                    key="blocked"
                    // className="user-content"
                    render={(_, userInfo) => {
                        return (
                            <Radio.Group value={Number(userInfo.blocked)} className="user-content"
                                         onChange={(e) => {
                                             handleChange(e, userInfo.id);
                                         }
                                         }>
                                <Radio value={0} className="user-status">UnBlocked</Radio>
                                <Radio value={1} className="user-status">Blocked</Radio>
                            </Radio.Group>
                        )
                    }}
                />
            </Table>
            <Modal title="Warning" open={isModalOpen} onOk={() => handleOk()} onCancel={handleCancel}>
                <span className="status-alert-content">Are you sure to change the status of this user?</span>
            </Modal>
        </div>
    )
}

export default UserList;