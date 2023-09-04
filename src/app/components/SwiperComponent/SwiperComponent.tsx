"use client";

import { Pagination, Scrollbar, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageComponent from "../ImageComponent/ImageComponet";

import "swiper/css";
import "swiper/css/pagination";

export default function SwiperComponent({ images }: { images: string[] }) {
  return (
    <Swiper
      slidesPerView={1}
      className="max-w-lg"
      modules={[Pagination, Scrollbar, Mousewheel]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
      {images.map((image: string) => (
        <SwiperSlide key={image}>
          <ImageComponent src={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
