import React from 'react';
import { Award, Target, Users, Globe2 } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Comprometidos con la máxima calidad en cada proyecto y servicio que ofrecemos.'
    },
    {
      icon: Target,
      title: 'Resultados',
      description: 'Enfocados en generar un impacto real y measurable en el crecimiento de nuestros clientes.'
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos como una extensión de tu equipo, construyendo relaciones duraderas.'
    },
    {
      icon: Globe2,
      title: 'Visión Global',
      description: 'Perspectiva internacional con conocimiento profundo de mercados locales.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-600">
                Sobre Nosotros
              </span>
            </div>
            
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              BRAVE AGENCY & GRUPO GLOBAL
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Somos una consultora líder especializada en soluciones empresariales integrales con más de 10 años 
              de experiencia en el mercado. Ayudamos a empresas de todos los tamaños a alcanzar su máximo potencial 
              a través de estrategias innovadoras y soluciones personalizadas.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Nuestro enfoque multidisciplinario combina consultoría estratégica, transformación digital, 
              marketing corporativo y gestión financiera para ofrecer resultados excepcionales que impulsan 
              el crecimiento sostenible de nuestros clientes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Proyectos Exitosos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Países</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Satisfacción Cliente</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Años Experiencia</div>
              </div>
            </div>

            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Conocer Más
            </button>
          </div>

          {/* Image */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <img
                className="w-full rounded-lg shadow-xl"
                src="https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/1e3a8a/ffffff?text=Visión+Global"
                alt="Grupo Global - Visión Global"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-transparent opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nuestros Valores
          </h3>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
