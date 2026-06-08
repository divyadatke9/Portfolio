import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 h-16 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-500 text-white font-bold">
            <Link to="/home">DD</Link>
          </div>
          <div>
            <p className="text-xs text-gray-500">PORTFOLIO</p>
            <h1 className="text-sm font-semibold text-gray-900">
              Divya Datke
            </h1>
          </div>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600"
        >
          ☰
        </button>

        {/* DESKTOP MENU (ALWAYS VISIBLE) */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className="text-gray-600 hover:text-emerald-600 font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE MENU (SEPARATE) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow">
          <ul
            className="flex flex-col p-4 gap-2"
            onClick={() => setIsOpen(false)}
          >
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="block py-2 text-gray-700 hover:text-emerald-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;