import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import HeaderInfo from "../../Components/HeaderInfo";
import {Layout} from "antd";
import AdminSideBar from "../../Components/admin/AdminSideBar";
import StorageDetail from "../../Components/admin/StorageDetail";
import "../../css/home.css";
import {toast} from "react-toastify";
import {updateBookStorageInfo} from "../../services/adminService";


const {Content} = Layout;

function StorageDetailView(){
    const {id} = useParams();

    const [bookStorage, setBookStorage] = React.useState([]);
    let initialBookStorage;

    useEffect(() => {
        fetch(`http://localhost:8080/api/book/${id}`)
            .then(response => response.json())
            .then(data => {
                initialBookStorage = data;
                setBookStorage(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    function changeBookInfo(key, value){
        setBookStorage({
            ...bookStorage,
            [key]: value
        })
    }

    function saveBtnClick(){
        const {title, publisher, author, price, stock, introduction, image} = bookStorage;
        if(!title || !publisher || !author || !price || !stock || !introduction || !image){
            toast.error("Please fill in all the blanks");
        }else{
            const url = `http://localhost:8080/api/storage/${id}`;

            function callback(data){
                if(data === true){
                    toast.success("Change Info Successfully");
                }else{
                    toast.error("Change Info Failed");
                }
            }

            updateBookStorageInfo(url, bookStorage, callback).then();
        }
    }

    function cancelChange(){
        window.location.reload();
    }

    return (
        <div className="View">
            <HeaderInfo />
            <Layout className="middle-part">
                <Layout className="body">
                    <AdminSideBar cur_key="/" />
                    <Content>
                        <StorageDetail storage={bookStorage} updateBookInfo={changeBookInfo} saveChange={saveBtnClick} cancelChange={cancelChange}/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default StorageDetailView;