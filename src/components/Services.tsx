import React from 'react';
import { TrendingUp, Target, Zap, Shield, Globe, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Consultoría Estratégica',
      description: 'Desarrollo de estrategias empresariales personalizadas para maximizar el crecimiento y la rentabilidad de tu negocio.',
      features: ['Análisis de mercado', 'Planificación estratégica', 'Optimización de procesos']
    },
    {
      icon: Zap,
      title: 'Transformación Digital',
      description: 'Modernización de procesos empresariales mediante tecnologías innovadoras y soluciones digitales avanzadas.',
      features: ['Digitalización de procesos', 'Automatización', 'Integración de sistemas']
    },
    {
      icon: Target,
      title: 'Marketing Corporativo',
      description: 'Estrategias de marketing integral para posicionar tu marca y aumentar la visibilidad en el mercado global.',
      features: ['Branding corporativo', 'Marketing digital', 'Campañas publicitarias']
    },
    {
      icon: Shield,
      title: 'Gestión Financiera',
      description: 'Optimización de recursos financieros y control de gestión para asegurar la estabilidad económica.',
      features: ['Control de gestión', 'Análisis financiero', 'Planificación presupuestaria']
    },
    {
      icon: Globe,
      title: 'Expansión Internacional',
      description: 'Apoyo integral para la internacionalización de empresas y entrada en nuevos mercados globales.',
      features: ['Estudios de mercado', 'Estrategias de entrada', 'Compliance internacional']
    },
    {
      icon: Users,
      title: 'Desarrollo Organizacional',
      description: 'Fortalecimiento del capital humano y optimización de la estructura organizacional.',
      features: ['Gestión del talento', 'Cultura organizacional', 'Formación ejecutiva']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Soluciones integrales diseñadas para impulsar el crecimiento y la competitividad de tu empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-blue-600 text-white mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      Saber más →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para transformar tu empresa?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-all hover:shadow-lg"
            >
              Solicitar Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
