import React from "react";
import {Card} from 'antd';

const {Meta} = Card;

function Book(props){
    return (
        <Card hoverable style={{width: 250}} cover={<img src={props.imgURL} alt={props.imgalt} style={{width: 250, height: 350}} />}>
            <Meta title={props.title} description={props.price} />
        </Card>
    )
}

export default Book;