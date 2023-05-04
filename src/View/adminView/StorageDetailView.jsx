import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import HeaderInfo from "../../Components/HeaderInfo";
import {Layout} from "antd";
import AdminSideBar from "../../Components/admin/AdminSideBar";
import StorageDetail from "../../Components/admin/StorageDetail";


const {Content} = Layout;

function StorageDetailView(){
    const {id} = useParams();

    const [bookStorage, setBookStorage] = React.useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/book/${id}`)
            .then(response => response.json())
            .then(data => {
                setBookStorage(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className="View">
            <HeaderInfo />
            <Layout className="middle-part">
                <Layout className="body">
                    <AdminSideBar cur_key="/" />
                    <Content>
                        <StorageDetail storage={bookStorage} />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default StorageDetailView;