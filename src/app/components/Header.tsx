// components/Header.jsx
import React from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 mt-2 shadow-md bg-white">
      {/* Logo */}
      <div className="logo m-1">
         <div className="flex items-center">
                  <Image 
                    src="/img/logo.png" 
                    alt="Logo de la óptica" 
                    width={120} 
                    height={40} 
                  />
                </div>
      </div>

      {/* Barra de búsqueda */}
      <div className="flex-grow mx-4">
  <div className="relative">
    <input
      type="text"
      placeholder="Buscar productos"
      className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none "
    />
    <FontAwesomeIcon
      icon={faSearch} // Icono de lupa
      className="absolute left-3 top-2.5 text-gray-400 text-lg"
    />
  </div>
</div>

        {/* Botones de acción */}
        <div className="flex items-center space-x-4">
            <button className="flex flex-col items-center text-red-600">
                    <Image 
                    src="/img/calendar-red.png"
                    alt="Agendar cita"
                    width={36}
                    height={36}
                    />
                    <span className="text-xs">Agenda tu cita</span>
            </button>
            <button className="flex flex-col items-center text-red-600">
                    <Image 
                    src="/img/user-red.png"
                    alt="Agendar cita"
                    width={36}
                    height={36}
                    />
                <span className="text-xs">Iniciar Sesión</span>
            </button>
            <button className="flex flex-col items-center text-red-600 ">
                    <Image 
                    src="/img/gps-red.png"
                    alt="Sigue tu compra"
                    width={36}
                    height={36}
                    />
              
                <span className="text-xs">Sigue tu compra</span>



            </button>
            <button className="flex flex-col items-center text-red-600">
                    <Image 
                    src="/img/cart-red.png"
                    alt="Agendar cita"
                    width={36}
                    height={36}
                    />
                <span className="text-xs">Carrito</span>
            </button>
        </div>

    </header>
  );
};

export default Header;
