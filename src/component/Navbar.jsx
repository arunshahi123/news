import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGlobe,
  FaSearch,
  FaUserShield,
} from "react-icons/fa";
import logo from "../assets/news.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const text = {
    en: {
      home: "Home",
      news: "News",
      about: "About",
      contact: "Contact",
      admin: "Admin",
      search: "Search...",
    },
    np: {
      home: "गृहपृष्ठ",
      news: "समाचार",
      about: "हाम्रो बारे",
      contact: "सम्पर्क",
      admin: "एडमिन",
      search: "खोज्नुहोस्...",
    },
  };

  return (
    <>
      {/* Top Bar */}

      <div className="bg-[#0A2C8B] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

          <div>
            सत्य, तथ्य र निष्पक्ष समाचार
          </div>

          <div className="flex items-center gap-4">

            {/* Language */}

            <button
              onClick={() =>
                setLanguage(language === "en" ? "np" : "en")
              }
              className="flex items-center gap-2 hover:text-red-300"
            >
              <FaGlobe />
              {language === "en" ? "नेपाली" : "English"}
            </button>

            {/* Admin */}

          <Link
  to="/admin/login"
  className="hover:text-red-300 flex items-center gap-2"
>
  <FaUserShield />
  {text[language].admin}
</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}

      <nav className="shadow-md bg-white sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="flex justify-between items-center h-20">

            {/* Logo */}

            <Link to="/" className="flex items-center gap-3">

              <img src={logo} alt="Nepal Rastraya News" className="w-14 h-14 object-contain" />

              <div>
                <h1 className="text-2xl font-bold text-[#0A2C8B]">
                  Nepal Rastraya News
                </h1>

                <p className="text-xs text-red-600">
                  सत्य, तथ्य र निष्पक्ष समाचार
                </p>
              </div>

            </Link>

            {/* Desktop Menu */}

            <div className="hidden md:flex items-center gap-8 font-semibold">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600"
                    : "hover:text-red-600"
                }
              >
                {text[language].home}
              </NavLink>

              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600"
                    : "hover:text-red-600"
                }
              >
                {text[language].news}
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600"
                    : "hover:text-red-600"
                }
              >
                {text[language].about}
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600"
                    : "hover:text-red-600"
                }
              >
                {text[language].contact}
              </NavLink>

            </div>

            {/* Search */}

            <div className="hidden lg:flex items-center border rounded-full overflow-hidden">

              <input
                type="text"
                placeholder={text[language].search}
                className="px-4 py-2 outline-none"
              />

              <button className="bg-red-600 px-4 py-3 text-white">
                <FaSearch />
              </button>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (

          <div className="md:hidden bg-white shadow-lg">

            <NavLink
              to="/"
              className="block px-5 py-4 border-b hover:bg-gray-100"
            >
              {text[language].home}
            </NavLink>

            <NavLink
              to="/news"
              className="block px-5 py-4 border-b hover:bg-gray-100"
            >
              {text[language].news}
            </NavLink>

            <NavLink
              to="/about"
              className="block px-5 py-4 border-b hover:bg-gray-100"
            >
              {text[language].about}
            </NavLink>

            <NavLink
              to="/contact"
              className="block px-5 py-4 border-b hover:bg-gray-100"
            >
              {text[language].contact}
            </NavLink>

            <NavLink
              to="/admin"
              className="block px-5 py-4 text-red-600 font-semibold"
            >
              {text[language].admin}
            </NavLink>

          </div>

        )}

      </nav>
    </>
  );
};

export default Navbar;