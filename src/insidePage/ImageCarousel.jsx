// src/components/ImageCarousel.js
import React from "react";
import Carousel from "./Carousel";

function ImageCarousel() {
  const slides = ["/image3.png", "/image2.png", "/image3.png"];

  return (
    <div className="relative ml-4">
      <div className="w-[1097px] h-[492px] overflow-hidden">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}

export default ImageCarousel;