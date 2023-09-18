import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const banner1 = "/banner1.webp";
const banner2 = "/banner2.webp";
const banner3 = "/banner3.webp";
const banner4 = "/banner4.webp";
const banner5 = "/banner5.webp";

const imageCarousel = [
  { image: banner1 },
  { image: banner2 },
  { image: banner3 },
  { image: banner4 },
  { image: banner5 },
];

const CarouselItem = () => {
  return (
    <Slider {...settings}>
      {Array.isArray(imageCarousel) && imageCarousel.length > 0 ? (
        imageCarousel.map((item, i) => (
          <div key={i}>
            <Image
              src={item.image}
              alt={item.image}
              className="rounded-lg w-full object-cover"
              width={1000}
              height={100}
            />
          </div>
        ))
      ) : (
        <span>No data available</span>
      )}
    </Slider>
  );
};

export default CarouselItem;
