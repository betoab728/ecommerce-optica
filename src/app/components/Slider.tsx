"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderProps {
  images: { src: string; alt: string }[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full">
              <Image
                src={img.src}
                alt={img.alt}
                layout="intrinsic" // Preserva la proporción de la imagen
                width={1600} 
                height={533} 
                priority={index === 0}
                className="object-contain" // Asegura que la imagen se ajuste sin recorte
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
