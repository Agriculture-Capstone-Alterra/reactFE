import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../assets/img/mawarputih.jpg"; // Assuming correct import path

export default class SimpleSlider extends Component {
  render() {
    const images = [
      img1,
      // Add other image URLs here if needed
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const slides = images.map((image, index) => (
      <div key={index}>
        <img src={image} alt={`Slide ${index + 1}`} />
      </div>
    ));

    return (
      <div>
        <Slider {...settings}>
          {slides}
        </Slider>
      </div>
    );
  }
}
