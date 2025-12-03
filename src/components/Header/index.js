import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Book.me
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Services
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-700 hover:text-blue-600 transition duration-300">
            <FaShoppingCart className="w-5 h-5" />
          </button>
          <button className="text-gray-700 hover:text-blue-600 transition duration-300">
            <FaUser className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
