import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "Committee", href: "/committee" },
  { name: "Call for Papers", href: "/call-for-papers" },
  { name: "Speakers", href: "/speakers" },
  { name: "Registration", href: "/registration" },
  { name: "Important Dates", href: "/important-dates" },
];

const dropdownNavigation = [
  { name: "Publication", href: "/publication" },
  { name: "Venue", href: "/venue" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Attractions", href: "/attractions" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest(".dropdown-container")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <>
      <div>
        <div className="container mx-auto px-2 py-2 z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-1 drop-shadow-xl text-blue-800">
              ICSEAMS 2025
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-2 drop-shadow-lg text-blue-500">
              1<sup>st</sup> International Conference on
              <br />
              Sustainable Energy and Advanced Manufacturing Systems
            </h2>
            <p className="text-xl mb-1 drop-shadow-md text-green-700">
              11-13 September 2025
            </p>
            <p className="text-lg drop-shadow-md text-green-700">
              BVRIT, Telangana, India
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-2"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="logo" className="w-20 md:w-25" />
              {/*  <span className="text-primary-600 text-2xl font-bold">
                ICSEAMS
              </span>
              <span className="text-secondary-600 font-semibold">2025</span> */}
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {mainNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary-600 ${
                      isActive ? "text-primary-600" : "text-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Dropdown Menu */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors focus:outline-none"
                >
                  <span>More</span>
                  {dropdownOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  >
                    {dropdownNavigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm ${
                            isActive
                              ? "text-primary-600 bg-primary-50"
                              : "text-gray-700 hover:bg-gray-50"
                          }`
                        }
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </div>
            </nav>

            {/* Mobile Navigation Toggle */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="container mx-auto px-4 py-4 bg-white shadow-lg">
              <nav className="flex flex-col space-y-4">
                {[...mainNavigation, ...dropdownNavigation].map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? "bg-primary-50 text-primary-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;
