import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import imageThumbnail_2 from "../images/pexels-photo-1470168.jpeg";
import Image from "react-bootstrap/Image";

function ControlledCarousel2() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={imageThumbnail_2}
          alt="First slide"
          thumbnail="true"
        />

      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={imageThumbnail_2}
          alt="Second slide"
          thumbnail="true"
        />

      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={imageThumbnail_2}
          alt="Third slide"
          thumbnail="true"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel2;
