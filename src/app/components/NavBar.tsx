
const NavBar = () => {

  return (
  
    <nav className="shadow-md bg-red-400">
      <div className="hidden lg:container mx-auto lg:flex items-center justify-center lg:py-4 px-6">
       
        {/* Menú de navegación */}
        <ul className="flex space-x-6">
          <li >
            <a
              href="#lentes-sol"
              className="text-white px-2 hover:text-gray-300"
            >
              Lentes de Sol
            </a>
          </li>
          <li>
            <a
              href="#lentes-oftalmicos"
              className="text-white px-2 hover:text-gray-300"
            >
              Lentes Oftálmicos
            </a>
          </li>
          <li className="border-b lg:border-none">
            <a
              href="#lentes-contacto"
              className="text-white px-2 hover:text-gray-300"
            >
              Lentes de Contacto
            </a>
          </li>
          <li className="border-b lg:border-none">
            <a
              href="#promociones"
              className="text-white px-2 hover:text-gray-300"
            >
              Promociones
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-white px-2 hover:text-gray-300"
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
