import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; 
import { Autoplay } from "swiper/modules";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { useSelector } from 'react-redux'; 
const Portfolio = () => {
  const mode = useSelector((state) => state.mode.mode);
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={mode==="dark" ? {color:'#E2E2B6'}: {}} >Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}

      <Swiper

        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="portfolio-slider"
      >
        
        <SwiperSlide>
          <img className="swiperimg" src={Sidebar} alt="Sidebar Project" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperimg" src={Ecommerce} alt="Ecommerce Project" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperimg" src={MusicApp} alt="Music App Project" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiperimg" src={HOC} alt="HOC Project" />
        </SwiperSlide>
      </Swiper>

      </div>
  );
};

export default Portfolio;
