import React from "react";
import { Carousel } from "antd";
import "../css/home.css";

function BookCarousel() {
  const requireContext = require.context(
    "../assets/carousel",
    true,
    /^\.\/.*\.jpg$/
  );

  function addPic(ctx) {
    const images = ctx.keys().map(ctx);
    let result = [];
    for (let i = 0; i < ctx.keys().length; i++) {
      let img = images[i];
      // console.log(img);
      result.push(
        <div className="carousel-item">
          <img alt={i} src={img} className="carousel-picture" />
        </div>
      );
    }
    return result;
  }

  return (
    <div className="carousel-container">
      <Carousel autoplay className="book-carousel">
        {addPic(requireContext)}
      </Carousel>
    </div>
  );
}

export default BookCarousel;
