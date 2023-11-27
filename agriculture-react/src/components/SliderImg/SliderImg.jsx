import React, { useState } from "react";
import Slider from "react-slick";

const ImgCard = ({ img }) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  return (
    <div className="card" style={{ width: "104px", position: "relative" }}>
      <img
        src={img}
        style={{ height: "104px" }}
        className="card-img-top"
        alt="..."
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {showButtons && (
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <button className="btn btn-primary">View</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      )}
    </div>
  );
};

export default class SliderImg {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { src: "image1.jpg", alt: "Image 1" },
        { src: "image2.jpg", alt: "Image 2" },
        { src: "image3.jpg", alt: "Image 3" },
        { src: "image4.jpg", alt: "Image 4" },
        { src: "image5.jpg", alt: "Image 5" },
      ],
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };

    const { images } = this.state;

    return (
      <div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <ImgCard img={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
