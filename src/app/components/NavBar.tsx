
const NavBar = () => {
  return (
    <nav className="shadow-md bg-red-400 ">
      <div className="container mx-auto flex items-center justify-center py-5 px-6">
      
        {/* Menú de navegación */}
        <ul className="flex space-x-6">
          <li>
            <a href="#lentes-sol" className="text-white px-2 hover:text-gray-300 ">
              Lentes de Sol
            </a>
          </li>
          <li>
            <a href="#lentes-oftalmicos" className="text-white px-2 hover:text-gray-300 py-2">
              Lentes Oftálmicos
            </a>
          </li>
          <li>
            <a href="#lentes-contacto" className="text-white px-2 hover:text-gray-300">
              Lentes de Contacto
            </a>
          </li>
          <li>
            <a href="#promociones" className="text-white px-2 hover:text-gray-300">
              Promociones
            </a>
          </li>
          <li>
            <a href="#contacto" className="text-white px-2 hover:text-gray-300">
              Contáctanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
