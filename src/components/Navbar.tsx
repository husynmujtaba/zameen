import React from 'react';
import { Menu, X, Home, LogIn, UserPlus, PlusSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Soonzameen</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-emerald-600">Home</a>
            <a href="/buy" className="text-gray-700 hover:text-emerald-600">Buy</a>
            <a href="/rent" className="text-gray-700 hover:text-emerald-600">Rent</a>
            <a href="/post-property" className="flex items-center text-emerald-600 hover:text-emerald-700">
              <PlusSquare className="h-5 w-5 mr-1" />
              Post Property
            </a>
            <a href="/login" className="flex items-center text-gray-700 hover:text-emerald-600">
              <LogIn className="h-5 w-5 mr-1" />
              Login
            </a>
            <a href="/signup" className="flex items-center bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
              <UserPlus className="h-5 w-5 mr-1" />
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</a>
            <a href="/buy" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Buy</a>
            <a href="/rent" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Rent</a>
            <a href="/post-property" className="block px-3 py-2 text-emerald-600 hover:text-emerald-700">Post Property</a>
            <a href="/login" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Login</a>
            <a href="/signup" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Sign Up</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;