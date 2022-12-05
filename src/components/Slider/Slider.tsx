import { FC, useState } from "react";
import style from "./Slider.module.scss";
import slide1 from "../../assets/slides/slide1.png";
import slide2 from "../../assets/slides/slide2.png";
import slide3 from "../../assets/slides/slide3.png";

const Slider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [slide1, slide2, slide3];

  return (
    <div
      //   style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      className={style.root}
    >
      <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slider;
