"use client";

import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
  
    <nav className="shadow-md bg-red-400 relative">
      <div className="container mx-auto flex items-center justify-between lg:justify-center py-1 px-6">
        {/* Botón hamburguesa (visible solo en pantallas pequeñas) */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl lg:hidden focus:outline-none"
          aria-expanded={menuOpen}
        >
          <div className="py-2">
          ☰
          </div>
         
        </button>

        {/* Menú de navegación */}
        <ul
          className={`absolute lg:static lg:flex lg:space-x-6 bg-red-400 w-full lg:w-auto left-0 top-12 lg:top-auto py-1 lg:py-0 transition-all duration-500 ease-in-out z-10 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-none lg:opacity-100 overflow-hidden`}
        >
          <li className="border-b lg:border-none">
            <a
              href="#lentes-sol"
              className="text-white px-6 py-3 lg:px-2 hover:text-gray-300 block"
            >
              Lentes de Sol
            </a>
          </li>
          <li className="border-b lg:border-none">
            <a
              href="#lentes-oftalmicos"
              className="text-white px-6 py-3 lg:px-2 hover:text-gray-300 block"
            >
              Lentes Oftálmicos
            </a>
          </li>
          <li className="border-b lg:border-none">
            <a
              href="#lentes-contacto"
              className="text-white px-6 py-3 lg:px-2 hover:text-gray-300 block"
            >
              Lentes de Contacto
            </a>
          </li>
          <li className="border-b lg:border-none">
            <a
              href="#promociones"
              className="text-white px-6 py-3 lg:px-2 hover:text-gray-300 block"
            >
              Promociones
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-white px-6 py-3 lg:px-2 hover:text-gray-300 block"
            >
              Contáctanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
