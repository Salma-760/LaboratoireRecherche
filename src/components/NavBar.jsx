// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation entre les pages

function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-xl font-bold text-blue-600">
                            LSATE
                        </Link>
                    </div>

                    {/* Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600">
                            Accueil
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600">
                            À propos
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;