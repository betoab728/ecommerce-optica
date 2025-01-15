import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { Poppins } from "next/font/google";
import Slider from "./components/Slider";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

// Lista de imágenes para el Slider
const sliderImages = [
  { src: "/img/promo4.jpg", alt: "Imagen 1" },
  { src: "/img/promo2.png", alt: "Imagen 2" },
  { src: "/img/promo3.png", alt: "Imagen 3" },
];

export default function Home() {
  return (
    <div className={poppins.className}>
      <Header />
      <NavBar />
      <Slider images={sliderImages} />
    
   
    </div>
  );
}
