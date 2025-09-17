import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    {
      number: '500+',
      label: 'Proyectos Completados',
      description: 'Soluciones exitosas implementadas'
    },
    {
      number: '98%',
      label: 'Satisfacción del Cliente',
      description: 'Clientes que recomiendan nuestros servicios'
    },
    {
      number: '50+',
      label: 'Países',
      description: 'Presencia global y experiencia internacional'
    },
    {
      number: '10+',
      label: 'Años de Experiencia',
      description: 'Trayectoria consolidada en el mercado'
    },
    {
      number: '24/7',
      label: 'Soporte',
      description: 'Atención continua a nuestros clientes'
    },
    {
      number: '100+',
      label: 'Especialistas',
      description: 'Equipo multidisciplinario de expertos'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Números que Hablan por Nosotros
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
            Resultados que demuestran nuestro compromiso con la excelencia
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-blue-100 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Únete a las Empresas Líderes que Confían en Nosotros
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Desde startups hasta corporaciones multinacionales, ayudamos a empresas de todos los 
              tamaños a alcanzar sus objetivos estratégicos y acelerar su crecimiento.
            </p>
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-all hover:shadow-lg">
              Solicitar Propuesta Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
