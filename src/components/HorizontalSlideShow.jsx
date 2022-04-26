import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";

export const HorizontalSlideShow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    beforeChange: (old, next) => setCurrentSlide(next),
  };

  useEffect(() => {
    console.log(slideRef);
  }, []);

  return (
    <div>
      <Slider {...settings} ref={slideRef}>
        {pictures.map((picture, index) => (
          <div
            className="flex flex-col items-center"
            key={picture.description}
            onClick={() => slideRef.current.slickGoTo(index)}
          >
            <img
              className="w-[300px] h-[200px]"
              src={picture.img}
              alt={picture.description}
            />
            {currentSlide === index ? (
              <p className="text-center">{picture.description}</p>
            ) : null}
          </div>
        ))}
      </Slider>
    </div>
  );
};
