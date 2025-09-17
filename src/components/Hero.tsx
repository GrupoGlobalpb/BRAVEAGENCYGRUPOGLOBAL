import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-32 pb-20 lg:pt-48 lg:pb-28 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center text-white bg-white bg-opacity-10 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-opacity-20 transition-all mb-8">
              <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-600 rounded-full">
                Nuevo
              </span>
              <span className="ml-4 text-sm">Soluciones empresariales integrales</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </div>

            {/* Main Title */}
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">BRAVE AGENCY</span>
              <span className="block text-blue-400 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-light mt-2">
                & GRUPO GLOBAL
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl max-w-3xl">
              Transformamos empresas con soluciones estratégicas innovadoras. Más de 10 años de experiencia 
              ayudando a compañías a alcanzar su máximo potencial en el mercado global.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#contacto"
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all hover:shadow-xl hover:scale-105"
                >
                  Comenzar Proyecto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <button className="w-full flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-lg text-white bg-white bg-opacity-10 hover:bg-opacity-20 md:py-4 md:text-lg md:px-10 transition-all backdrop-blur-sm">
                  <Play className="mr-2 w-5 h-5" />
                  Ver Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 sm:gap-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Países</div>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-2xl lg:max-w-md">
              <div className="relative block w-full bg-gray-800 rounded-lg overflow-hidden">
                <img
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  src="https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/1e3a8a/ffffff?text=Excelencia+Corporativa"
                  alt="Brave Agency - Excelencia Corporativa"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-50"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">Excelencia en cada proyecto</h3>
                  <p className="text-sm text-gray-200 mt-1">Comprometidos con resultados excepcionales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
