import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, LightbulbIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [committeeDropdownOpen, setCommitteeDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setCommitteeDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Committee', 
      path: '/committee',
      dropdown: [
        { name: 'Advisory Committee', path: '/committee/advisory' },
        { name: 'Technical Committee', path: '/committee/technical' },
        { name: 'Organizing Committee', path: '/committee/organizing' }
      ]
    },
    { name: 'Call for Papers', path: '/call-for-papers' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Registration', path: '/registration' },
    { name: 'Important Dates', path: '/important-dates' },
    { name: 'Publication', path: '/publication' },
    { name: 'Venue', path: '/venue' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Nearby Places', path: '/nearby-places' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`sticky top-0 z-50 w-full ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} transition-all duration-300`}>
      <nav className="max-w-site mx-auto px-6 py-1">
        <div className="flex justify-between items-center">
       

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-conference-green"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => 
              !link.dropdown ? (
                <NavLink 
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 ${
                      isActive 
                        ? 'text-conference-green'
                        : 'text-gray-700 hover:text-conference-green hover:bg-gray-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ) : (
                <div 
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setCommitteeDropdownOpen(true)}
                  onMouseLeave={() => setCommitteeDropdownOpen(false)}
                >
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      `px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 flex items-center ${
                        isActive || location.pathname.includes(link.path)
                          ? 'text-conference-green'
                          : 'text-gray-700 hover:text-conference-green hover:bg-gray-100'
                      }`
                    }
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </NavLink>
                  
                  {committeeDropdownOpen && (
                    <div className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-fade-in">
                      <div className="py-1">
                        {link.dropdown.map((dropdownItem) => (
                          <NavLink
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className={({ isActive }) => 
                              `block px-4 py-2 text-sm ${
                                isActive 
                                  ? 'bg-gray-100 text-conference-green font-bold'
                                  : 'text-gray-700 hover:bg-gray-100 hover:text-conference-green'
                              }`
                            }
                          >
                            {dropdownItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-xl p-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => 
                !link.dropdown ? (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                      `px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 ${
                        isActive 
                          ? 'bg-gray-100 text-conference-green'
                          : 'text-gray-700 hover:text-conference-green hover:bg-gray-100'
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <div key={link.path} className="flex flex-col">
                    <button
                      className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 ${
                        location.pathname.includes(link.path)
                          ? 'bg-gray-100 text-conference-green'
                          : 'text-gray-700 hover:text-conference-green hover:bg-gray-100'
                      }`}
                      onClick={() => setCommitteeDropdownOpen(!committeeDropdownOpen)}
                    >
                      {link.name}
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform duration-200 ${
                          committeeDropdownOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {committeeDropdownOpen && (
                      <div className="ml-4 mt-1 border-l-2 border-gray-200 pl-4 animate-fade-in">
                        {link.dropdown.map((dropdownItem) => (
                          <NavLink
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className={({ isActive }) => 
                              `block px-3 py-2 rounded-md text-sm ${
                                isActive 
                                  ? 'text-conference-green font-bold'
                                  : 'text-gray-700 hover:text-conference-green'
                              }`
                            }
                            onClick={closeMenu}
                          >
                            {dropdownItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;