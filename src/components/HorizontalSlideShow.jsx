import React, { useState, useRef } from "react";
import Slider from "react-slick";

export const HorizontalSlideShow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const settings = {
    className: "center w-[1400px]",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    arrows: false,
    beforeChange: (old, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const onNext = () => {
    slideRef.current.slickNext();
  };

  const onPrev = () => {
    slideRef.current.slickPrev();
  };

  return (
    <div className="h-[50vh] flex items-center justify-center">
      <img
        src="/images/arrow.svg"
        alt="arrow"
        className="w-[40px] rotate-180 cursor-pointer"
        onClick={onPrev}
      />
      <Slider {...settings} ref={slideRef}>
        {pictures.map((picture, index) => (
          <div key={picture.description} className="h-full py-[30px]">
            <div
              onClick={() => slideRef.current.slickGoTo(index)}
              className="cursor-pointer flex flex-col items-center justify-center h-full"
            >
              <img
                src={picture.img}
                alt={picture.description}
                className={`w-[150px] ${
                  currentSlide === index ? "scale-[120%]" : "scale-[80%]"
                }`}
              />
              {currentSlide === index ? (
                <p className="text-center mt-[50px] text-[35px] font-semibold">
                  {picture.description}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </Slider>
      <img
        src="/images/arrow.svg"
        alt="arrow"
        className="w-[40px] cursor-pointer"
        onClick={onNext}
      />
    </div>
  );
};
