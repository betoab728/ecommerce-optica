// components/Header.jsx
import React from "react";
import Image from 'next/image';


const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      {/* Logo */}
      <div className="logo">
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
        <input
          type="text"
          placeholder="Buscar productos"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Botones de acción */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 text-gray-600">
          <i className="fas fa-calendar-alt"></i>
          <span>Agenda tu examen</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600">
          <i className="fas fa-user"></i>
          <span>Iniciar Sesión</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600">
          <i className="fas fa-clipboard-list"></i>
          <span>Sigue tu compra</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600">
          <i className="fas fa-shopping-cart"></i>
          <span>Carrito</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
