import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNav = [
    { name: "Home", href: "/" },
    { name: "Committee", href: "/committee" },
    { name: "Call for Papers", href: "/call-for-papers" },
    { name: "Speakers", href: "/speakers" },
    { name: "Registration", href: "/registration" },
    { name: "Important Dates", href: "/important-dates" },
    { name: "Publication", href: "/publication" },
    { name: "Venue", href: "/venue" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Attractions", href: "/attractions" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      {/* Logo and Conference Details */}
      <div className="flex justify-around items-center bg-white py-6 px-4 text-center border-b gap-4">
        {/* Top Logo - Hidden on mobile */}
        <div className="hidden md:block">
          <img src="/images/logo.png" className="h-36 mx-auto" alt="Vishnu" />
        </div>

        {/* Center Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            ICSEAMS-2025
          </h1>
          <p className="mt-2 text-lg font-medium leading-snug">
            1<sup>st</sup> International Conference on <br />
            <span className="text-red-600">Sustainable </span>
            <span className="text-green-700">Energy </span>
            <span className="text-pink-600">and </span>
            <span className="text-blue-700">Advanced </span>
            <span className="text-yellow-600">Manufacturing </span>
            <span className="text-red-600">Systems</span>
          </p>
          <p className="mt-1 font-semibold">11th - 13th September, 2025</p>
          <p className="text-sm">
            B V Raju Institute of Technology, Narsapur, Telangana, INDIA
          </p>
        </div>

        {/* Bottom Logo - Hidden on mobile */}
        <div className="hidden md:block">
          <img src="/images/bvrit.png" className="h-12 mx-auto" alt="BVRIT" />
        </div>
      </div>

      {/* Navigation Bar */}
      <header className={`sticky top-0 z-50 ${scrolled ? "shadow-md" : ""}`}>
        <nav className="bg-[#002147] text-white">
          <div className="container mx-auto flex justify-center items-center px-4 py-2">
            {/* Toggle for Mobile */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {mainNav.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium hover:text-yellow-300"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-[#002147] px-4 pb-4 space-y-2">
              {mainNav.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="block text-white hover:text-yellow-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
