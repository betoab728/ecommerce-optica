"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-50">
      {/* Botón hamburguesa */}
      <button
        onClick={toggleMenu}
        className="text-red-500 text-2xl lg:hidden focus:outline-none"
        aria-expanded={menuOpen}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out z-40 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Menú de navegación */}
      <ul
        className={`fixed top-0 left-0 bg-gray-100 w-80 h-full transition-all duration-500 ease-in-out z-50 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Logo y botón de cerrar */}
        <li className="flex items-center justify-between p-4 border-b border-white">
          <Image
            src="/img/logo.png"
            alt="Sigue tu compra"
            width={120}
            height={40}
          />
          <button onClick={toggleMenu} className="text-red-600 text-2xl focus:outline-none">
            &times;
          </button>
        </li>

        <li className="border-b border-white">
          <a href="#lentes-sol" className="text-red-600 px-6 py-3 hover:text-red-500 block">
            Lentes de Sol
          </a>
        </li>
        <li className="border-b border-white">
          <a href="#lentes-oftalmicos" className="text-red-600 px-6 py-3 hover:text-red-500 block">
            Lentes Oftálmicos
          </a>
        </li>
        <li className="border-b border-white">
          <a href="#lentes-contacto" className="text-red-600 px-6 py-3 hover:text-red-500 block">
            Lentes de Contacto
          </a>
        </li>
        <li className="border-b border-white">
          <a href="#promociones" className="text-red-600 px-6 py-3 hover:text-red-500 block">
            Promociones
          </a>
        </li>
        <li>
          <a href="#contacto" className="text-red-600 px-6 py-3 hover:text-red-500 block">
            Contáctanos
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
