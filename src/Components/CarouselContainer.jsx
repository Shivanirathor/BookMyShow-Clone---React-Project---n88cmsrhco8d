import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import slider from "./slider.json";
const CarouselContainer = () => {
  return (
    <Carousel>
      {slider.map((item) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
};
export default CarouselContainer;
