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

const banner1 = "/banner1.png";
const banner2 = "/banner2.png";
const banner3 = "/banner3.png";
const banner4 = "/banner4.png";

const imageCarousel = [
  { image: banner1 },
  { image: banner2 },
  { image: banner3 },
  { image: banner4 },
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
              className="w-full h-96 object-cover object-center "
              width={1000}
              height={80}
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
