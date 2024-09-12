import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import top from "./top";
import Top_card from "./top_card";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

function Top() {
  return (
    <div className="h-[95vh] mt-20  bg-gray-200">
      <div className="w-[87vw] flex m-auto gap-8 justify-between">
        <div className="w-[27vw] h-[15.5vh] border-b-2 border-black"></div>
        <h1 className="mt-[12vh] text-center text-[38px]">
          SHOP OUR BESTSELLER's
        </h1>
        <div className="w-[27vw] h-[15.5vh] border-b-2 border-black"></div>
      </div>

      <div className="h-[55vh] w-[90vw] mt-10 mx-auto">
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          slidesPerGroupSkip={2}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 4,
              slidesPerGroup: 2,
            },
          }}
          // scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper h-[60vh]"
        >
          {top.map((k) => {
            return (
              <SwiperSlide key={k.id}>
                <Top_card
                  id={k.id}
                  name={k.name}
                  price={k.price}
                  sp={k.sp}
                  cat={k.cat}
                  subcat={k.subcat}
                  img={k.img}
                  star={k.star}
                  color={k.color}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Top;
