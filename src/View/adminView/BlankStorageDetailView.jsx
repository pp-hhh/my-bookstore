import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import AdminHeaderInfo from "../../Components/admin/AdminHeaderInfo";
import {Layout} from "antd";
import AdminSideBar from "../../Components/admin/AdminSideBar";
import StorageDetail from "../../Components/admin/StorageDetail";
import "../../css/home.css";
import {toast} from "react-toastify";
import {addStorageItem, updateBookStorageInfo} from "../../services/adminService";
import BlankStorageDetail from "../../Components/admin/BlankStorageDetail";


const {Content} = Layout;

function BlankStorageDetailView(){
    const [bookStorage, setBookStorage] = React.useState([]);
    let initialBookStorage;

    // useEffect(() => {
    //     fetch(`http://localhost:8080/api/book/${id}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             initialBookStorage = data;
    //             setBookStorage(data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [])

    function changeBookInfo(key, value){
        // console.log(key, value);
        setBookStorage({
            ...bookStorage,
            [key]: value
        })
    }

    function uploadImg(){

    }

    const navigate = useNavigate();

    function saveBtnClick(){
        const {title, publisher, author, price, stock, introduction} = bookStorage;
        if(!title || !publisher || !author || !price || !stock || !introduction){
            toast.error("Please fill in all the blanks");
        }else{
            const url = `http://localhost:8080/storage/add`;

            function callback(data){
                if(data > 0){
                    toast.success("Add Book Successfully");
                    // console.log(data);
                    navigate(`/Storage/${Number(data)}`)
                }else{
                    toast.error("Add Book Failed");
                }
            }

            addStorageItem(url, bookStorage, callback).then();
        }
    }

    function cancelChange(){
        window.location.reload();
    }

    return (
        <div className="View">
            <AdminHeaderInfo />
            <Layout className="middle-part">
                <Layout className="body">
                    <AdminSideBar cur_key="/" />
                    <Content>
                        <BlankStorageDetail storage={bookStorage} updateBookInfo={changeBookInfo} saveChange={saveBtnClick} cancelChange={cancelChange} uploadImg={uploadImg}/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default BlankStorageDetailView;