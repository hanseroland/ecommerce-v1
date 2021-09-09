import React, { useState } from "react";
import "./Slide.css";
import Slider from "react-slick";
import astronaut from "../../images/angela-bailey-jlo7Bf4tUoY-unsplash.jpg";
import celebrating from "../../images/duy-hoang-ojZ4wJNUM5w-unsplash (1).jpg";
import education from "../../images/felipe-galvan-AhfrA5VQNpM-unsplash.jpg";
import taken from "../../images/laura-chouette-U5PdJOfQyTo-unsplash.jpg";
import take from "../../images/tamanna-rumee-lpGm415q9JA-unsplash.jpg";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken,take];

const Slide = (props) => {

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
    
      const [imageIndex, setImageIndex] = useState(0);
    
      const settings = {
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        lazyLoad: true,
        centerPadding: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };
    
      return (
        <div className="App">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div  key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
      );
    }
    

export default Slide
