
const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
       

        {/* Menú de navegación */}
        <ul className="flex space-x-6">
          <li>
            <a href="#lentes-sol" className="text-gray-700 hover:text-blue-500">
              Lentes de Sol
            </a>
          </li>
          <li>
            <a href="#lentes-oftalmicos" className="text-gray-700 hover:text-blue-500">
              Lentes Oftálmicos
            </a>
          </li>
          <li>
            <a href="#lentes-contacto" className="text-gray-700 hover:text-blue-500">
              Lentes de Contacto
            </a>
          </li>
          <li>
            <a href="#promociones" className="text-gray-700 hover:text-blue-500">
              Promociones
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
