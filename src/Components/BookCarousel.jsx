import React, {useState} from "react";
import { Carousel } from "antd";
import "../css/home.css";

function BookCarousel() {
    const requireContext = require.context("../assets/carousel", true, /^\.\/.*\.jpg$/);

    function addPic(ctx){
        const images = ctx.keys().map(ctx);
        console.log(images);
        let result = [];
        for (let i = 0; i < ctx.keys().length; i++) {
            let img = images[i];
            console.log(img);
            result.push(<div><img alt={i} src={img}/></div>);
        }
        return result;
    }


  return (
    <Carousel autoplay className="book-carousel">
        {addPic(requireContext)}
    </Carousel>
  );
}

export default BookCarousel;
