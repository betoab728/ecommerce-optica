
const NavBar = () => {
  return (
    <nav className="shadow-md bg-red-400 ">
      <div className="container mx-auto flex items-center justify-center py-5 px-6">
       

        {/* Menú de navegación */}
        <ul className="flex space-x-6">
          <li>
            <a href="#lentes-sol" className="text-white hover:text-gray-300 font-semibold">
              Lentes de Sol
            </a>
          </li>
          <li>
            <a href="#lentes-oftalmicos" className="text-white hover:text-gray-300 font-semibold">
              Lentes Oftálmicos
            </a>
          </li>
          <li>
            <a href="#lentes-contacto" className="text-white hover:text-gray-300 font-semibold">
              Lentes de Contacto
            </a>
          </li>
          <li>
            <a href="#promociones" className="text-white hover:text-gray-300 font-semibold">
              Promociones
            </a>
          </li>
          <li>
            <a href="#contacto" className="text-white hover:text-gray-300 font-semibold">
              Contáctanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
