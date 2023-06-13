import React, { useState } from 'react';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const handleProductsMouseEnter = () => {
    setIsProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    setIsProductsOpen(false);
  };

  const handleResourcesMouseEnter = () => {
    setIsResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    setIsResourcesOpen(false);
  };

  return (
    <nav className="bg-gray-900 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Company Logo and Name */}
            <img
              className="block lg:hidden h-8 w-auto"
              src="logo.png"
              alt="Logo"
            />
            <img
              className="hidden lg:block h-8 w-auto"
              src="logo.png"
              alt="Logo"
            />
            <span className="text-white font-bold ml-2">Company Name</span>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {/* Navigation Links */}
              <a
                href="https://google.com"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <div
                className="relative"
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                {/* Products Dropdown */}
                <button
                  type="button"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  Products
                </button>
                {isProductsOpen && (
                  <div
                    className="absolute z-10 bg-gray-900 text-white py-2 mt-2 rounded-md shadow-lg"
                    onMouseEnter={handleProductsMouseEnter}
                    onMouseLeave={handleProductsMouseLeave}
                  >
                    {/* Dropdown Content */}
                    <a href="https://google.com" className="block px-4 py-2 text-sm">
                      Product 1
                    </a>
                    <a href="https://google.com" className="block px-4 py-2 text-sm">
                      Product 2
                    </a>
                  </div>
                )}
              </div>
              {/* Resources Link */}
              <div
                className="relative p-5"
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
              >
                <button
                  type="button"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  Resources
                </button>
                {isResourcesOpen && (
                  <div
                    className="absolute z-10 bg-gray-900 text-white py-2 mt-2 rounded-md shadow-lg"
                    onMouseEnter={handleResourcesMouseEnter}
                    onMouseLeave={handleResourcesMouseLeave}
                  >
                    {/* Dropdown Content */}
                    <a href="https://google.com" className="block px-4 py-2 text-sm">
                      Resource 1
                    </a>
                    <a href="https://google.com" className="block px-4 py-2 text-sm">
                      Resource 2
                    </a>
                  </div>
                )}
              </div>
              {/* Pricing Link */}
              <a
                href="https://google.com"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
