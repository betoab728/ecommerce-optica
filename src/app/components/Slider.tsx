// Importaciones necesarias
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules'; // Importación desde 'swiper/modules'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Definir los props del componente
interface SliderProps {
  images: { src: string; alt: string }[]; // Lista de rutas y descripciones de las imágenes
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay ]} // Activa los módulos de Swiper
        navigation // Habilita la navegación
        pagination={{ clickable: true }} // Habilita la paginación interactiva
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop // Habilita el loop continuo
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[583px]">
              <Image
                src={img.src} // Ruta de la imagen
                alt={img.alt} // Texto alternativo
                layout="fill" // Ocupa todo el contenedor
                objectFit="cover" // Ajusta el recorte de la imagen
                priority={index === 0} // Prioriza la carga de la primera imagen
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
