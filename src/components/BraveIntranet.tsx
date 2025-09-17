import React from 'react';
import { ArrowRight } from 'lucide-react';

const BraveIntranet: React.FC = () => {

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-10">
          Nuestra Plataforma Interna: El Corazón de la Excelencia
        </h2>
        
        <a
          href="https://intranet-brave.grupoglobalplataformabilateral.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
        >
          Acceder a la Intranet
          <ArrowRight className="ml-3 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default BraveIntranet;
