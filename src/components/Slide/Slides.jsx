import { useState } from "react";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

import "./Slides.css";

export default function Slideshow({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const nextslide = () => {
      current === length - 1 ? setCurrent(0) : setCurrent(current + 1)
  };
  const prevSlide = () => {
      current === 0 ? setCurrent(length - 1) : setCurrent(current - 1)
  };

  return (
    <figure className="containerSlide">
      <img src={images[current]} alt="image carrousel" className="main-img"/>

      {length > 1 && <img
        src={leftArrow}
        className="leftArrow"
        onClick={prevSlide}
        alt="Previous"
      />}

      {length > 1 && <img
        src={rightArrow}
        className="rightArrow"
        onClick={nextslide}
        alt="Previous"
      />}
      {length > 1 && <figcaption> {current + 1} / {length} </figcaption>}
    </figure>
  );
}
