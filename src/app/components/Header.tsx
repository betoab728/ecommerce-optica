import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (

    <header className="flex items-center justify-between p-4 shadow-md bg-white">

    {/*menu hamburguesa solo visible en tamaños menores a lg*/}
    <HamburgerMenu />
      {/* Logo */}
      <div className="px-2">
        <Image
          src="/img/logo.png"
          alt="Logo de la óptica"
          width={120}
          height={40}
        />
      </div>

      {/* Barra de búsqueda visible solo en tablet y PC */}
      <div className="hidden md:flex flex-grow mx-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Buscar productos"
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-2.5 text-gray-400 text-lg"
          />
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex items-center space-x-4">
        <button className="hidden lg:flex flex-col items-center text-red-600">
          <Image
            src="/img/calendar-red.png"
            alt="Agendar cita"
            width={36}
            height={36}
          />
          <span className="text-xs">Agenda tu cita</span>
        </button>
        <button className="hidden lg:flex flex-col items-center text-red-600">
          <Image
            src="/img/user-red.png"
            alt="Iniciar Sesión"
            width={36}
            height={36}
          />
          <span className="text-xs">Iniciar Sesión</span>
        </button>
        <button className="hidden lg:flex flex-col items-center text-red-600">
          <Image
            src="/img/gps-red.png"
            alt="Sigue tu compra"
            width={36}
            height={36}
          />
          <span className="text-xs">Sigue tu compra</span>
        </button>
    
        <button className="flex flex-col items-center text-red-600 lg:hidden md:hidden">
          <Image
            src="/img/search-red.png"
            alt="Buscar"
            width={36}
            height={36}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span className="text-xs">Buscar</span>
        </button>

        <button className="flex flex-col items-center text-red-600">
          <Image
            src="/img/cart-red.png"
            alt="Carrito"
            width={36}
            height={36}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span className="text-xs">Carrito</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
