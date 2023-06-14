import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import logo from "../logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // To handle toggle of hamburger menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //To handle toggle of Products button
  const handleProductsToggle = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  //To handle toggle of Resources button
  const handleResourcesToggle = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <nav className="bg-gray-900 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Company Logo and Name */}
            <img
              className="block lg:hidden h-8 w-auto"
              src={logo}
              alt="Logo"
              aria-label="Logo"
            />
            <img
              className="hidden lg:block h-8 w-auto"
              src={logo}
              alt="Logo"
              aria-label="Logo"
            />
            <span className="text-white font-bold ml-2">Phoenix UI</span>
          </div>
          {/* Hamburger Menu */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={handleMenuToggle}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
          {/* Navigation Links */}
          <div className="hidden sm:block">
            <div className="flex space-x-2 py-2 mt-1">
              <a
                href="/IEEE-Gems/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <div
                className="relative"
                onMouseEnter={handleProductsToggle}
                onMouseLeave={handleProductsToggle}
              >
                <button
                  type="button"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-5 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center"
                >
                  Products <AiOutlineDown className="ml-1.5 mt-1" />
                </button>
                {isProductsOpen && (
                  <div className="absolute z-10 bg-gray-900 text-white py-2 rounded-md shadow-lg">
                    <a
                      href="/IEEE-Gems/"
                      className="block px-4 py-2 text-sm"
                    >
                      Product 1
                    </a>
                    <a
                      href="/IEEE-Gems/"
                      className="block px-4 py-2 text-sm"
                    >
                      Product 2
                    </a>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={handleResourcesToggle}
                onMouseLeave={handleResourcesToggle}
              >
                <button
                  type="button"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center"
                >
                  Resources <AiOutlineDown className="ml-1.5 mt-1" />
                </button>
                {isResourcesOpen && (
                  <div className="absolute z-10 bg-gray-900 text-white py-2 rounded-md shadow-lg">
                    <a
                      href="/IEEE-Gems/"
                      className="block px-4 py-2 text-sm"
                    >
                      Resource 1
                    </a>
                    <a
                      href="/IEEE-Gems/"
                      className="block px-4 py-2 text-sm"
                    >
                      Resource 2
                    </a>
                  </div>
                )}
              </div>
              <a
                href="/IEEE-Gems/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>

        {/* Hamburger Menu Content for smaller devices */}
        {isMenuOpen && (
          <div className="sm:hidden bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/IEEE-Gems/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <div
                className="relative"
                onMouseEnter={handleProductsToggle}
                onMouseLeave={handleProductsToggle}
              >
                <button
                  type="button"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none flex justify-center"
                >
                  Products
                </button>
                {isProductsOpen && (
                  <div className="absolute z-10 bg-gray-900 text-white py-2 mt-1 ml-3 rounded-md shadow-lg">
                    <a
                      href="/IEEE-Gems/"
                      className="block px-4 py-2 text-base"
                    >
                      Product 1
                    </a>
                    <a
                      href="/IEEE-Gems/"
                      className="block px-4 py-2 text-base"
                    >
                      Product 2
                    </a>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={handleResourcesToggle}
                onMouseLeave={handleResourcesToggle}
              >
                <button
                  type="button"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none flex justify-center"
                >
                  Resources
                </button>
                {isResourcesOpen && (
                  <div className="absolute z-10 bg-gray-900 text-white py-2 mt-1 ml-3 rounded-md shadow-lg">
                    <a
                      href="/IEEE-Gems/"
                      className="block px-4 py-2 text-base"
                    >
                      Resource 1
                    </a>
                    <a
                      href="/IEEE-Gems/"
                      className="block px-4 py-2 text-base"
                    >
                      Resource 2
                    </a>
                  </div>
                )}
              </div>
              <a
                href="/IEEE-Gems/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
