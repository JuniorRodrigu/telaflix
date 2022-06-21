import React, { useRef, useState } from "react";
import "./MovieRow.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from "swiper";
export default ({ title, items }) => {
  return (
    <>
    <div><h1>{title}</h1></div>
    <Swiper
    slidesPerView={4}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
    >   
  
    
     <div>
      
        
      
      <div className="movieRow--listarea">
        
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
                <div key={key} className="movieRow--item"><SwiperSlide> 
                <img 
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.original_title}
                /> </SwiperSlide>
              </div>
            ))}
        </div>
      </div>
    </div>
    </Swiper>
    </>
  );
};
