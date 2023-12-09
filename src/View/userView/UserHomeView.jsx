import React, {useEffect, useState} from 'react';
import HeaderInfo from "../../Components/HeaderInfo";
import {Layout} from "antd";
import SideBar from "../../Components/SideBar";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import BookCarousel from "../../Components/BookCarousel";
import BookList from "../../Components/BookList";
import {getAllBooks, graphqlGetBookByTitle} from "../../services/bookService";

const { Content } = Layout;


function UserHomeView(props){
    const location = useLocation();
    const current = location.pathname;

    const [list, setList] = useState([]);
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        const endpoint = "http://localhost:8080/api/books";
        function callback(data){
            setAllBooks(data);
            setList(data);
        }
        getAllBooks(endpoint, callback);
    }, []);

    const navigate = useNavigate();

    function searchBook(searchInput){
        navigate("/");
        //filter book by searchInput
        if(searchInput === ""){
            setList(allBooks);
            return;
        }
        // graphql query (bookByTitle)
        const endpoint = "http://localhost:8080/graphql";
        const query = {"query": `{bookByTitle(title: "${searchInput}") {id,title,author,price}}`};
        console.log(query);
        function callback(data) {
            // alert (data);
            alert(JSON.stringify(data));
        }
        graphqlGetBookByTitle(endpoint, query, callback);


        let newlist = list.filter((book) =>
            book.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setList(newlist);
    }


    return (
        <div className="View">
            <HeaderInfo searchClick={searchBook} current={current} />
            <Layout className="middle-part">
                <SideBar cur_key={current} />
                <Content>
                    <BookCarousel />
                    <BookList books={list} />
                </Content>
            </Layout>
        </div>
    )
}

export default UserHomeView;