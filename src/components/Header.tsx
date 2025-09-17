import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">BRAVE AGENCY</span>
              <div className="ml-3 text-sm text-gray-600 font-medium border-l border-gray-300 pl-3">
                & GRUPO GLOBAL
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Inicio
            </Link>
            
            <div className="relative">
              <button
                type="button"
                className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Servicios
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-lg"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    <a href="#consultoria" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Consultoría Estratégica
                    </a>
                    <a href="#desarrollo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Desarrollo Digital
                    </a>
                    <a href="#marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Marketing Corporativo
                    </a>
                    <a href="#finanzas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Gestión Financiera
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#nosotros" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Nosotros
            </a>
            <a href="#precios" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Precios
            </a>
            <a href="#contacto" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <Link
              to="/login"
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Acceder
            </Link>
            <a
              href="#contacto"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              Consulta Gratuita
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-900">BRAVE AGENCY</span>
                </div>
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Inicio
                  </Link>
                  <a href="#servicios" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Servicios
                  </a>
                  <a href="#nosotros" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Nosotros
                  </a>
                  <a href="#precios" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Precios
                  </a>
                  <a href="#contacto" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Contacto
                  </a>
                  <Link to="/login" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Acceder
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <a
                href="#contacto"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Consulta Gratuita
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
