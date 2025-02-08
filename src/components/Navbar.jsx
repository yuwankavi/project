import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">HOMIE</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/properties" className="text-gray-700 hover:text-gray-900">Buy</Link>
            <Link to="/properties" className="text-gray-700 hover:text-gray-900">Sale</Link>
            <Link to="/properties" className="text-gray-700 hover:text-gray-900">My Properties</Link>
            <Link to="/properties" className="text-gray-700 hover:text-gray-900">Saved Properties</Link>
            <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Register
            </Link>
            <Link to="/login" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;