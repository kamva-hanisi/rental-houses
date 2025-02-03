import React, { useState} from "react";
import style from "./Slider.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className={style.slider}>
      <BsArrowLeftCircleFill onClick={prevSlide} className={style.arrowLeft} />
      {data.map((item, index) => (
        <img
          src={item.src}
          alt={item.alt}
          key={index}
          className={style.Slide === index ? "slide" : "slide slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className={style.arrowRight}
      />
      <span>
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Slider;
