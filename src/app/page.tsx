"use client";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { Poppins } from "next/font/google";
import Slider from "./components/Slider";
import { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});


// Listas de imágenes para PC y móvil
const desktopImages = [
  { src: "/img/promo5.jpg", alt: "Imagen PC 1" },
  { src: "/img/promo6.jpg", alt: "Imagen PC 2" },
];

const mobileImages = [
  { src: "/img/promo5v.jpg", alt: "Imagen móvil 1" },
  { src: "/img/promo6v.jpg", alt: "Imagen móvil 2" },
];


export default function Home() {

  const [sliderImages, setSliderImages] = useState(desktopImages);

  useEffect(() => {
    const handleResize = () => {
      // Cambiar la lista de imágenes según el tamaño de la pantalla
      if (window.matchMedia("(max-width: 768px)").matches) {
        setSliderImages(mobileImages); // Pantalla móvil
      } else {
        setSliderImages(desktopImages); // Pantalla de escritorio
      }
    };
     // Detectar el tamaño inicial
     handleResize();


     // Agregar un event listener para cambios en el tamaño
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener al desmontar
    return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className={poppins.className}>
      <Header />
      <NavBar />
      <Slider images={sliderImages} />
    
   
    </div>
  );
}
