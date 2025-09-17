import React from 'react';
import { CheckCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Básico',
      price: '49',
      description: 'Ideal para individuos y pequeños equipos.',
      features: [
        '10 Tarjetas Digitales',
        'Diseños Estándar',
        'Actualizaciones Ilimitadas',
        'Soporte por Email'
      ],
      isPopular: false
    },
    {
      name: 'Profesional',
      price: '99',
      description: 'Perfecto para empresas en crecimiento.',
      features: [
        '50 Tarjetas Digitales',
        'Diseños Premium',
        'Analíticas Básicas',
        'Integración con CRM',
        'Soporte Prioritario'
      ],
      isPopular: true
    },
    {
      name: 'Empresa',
      price: 'Custom',
      description: 'Soluciones a medida para grandes corporaciones.',
      features: [
        'Tarjetas Ilimitadas',
        'Diseños Personalizados',
        'Analíticas Avanzadas',
        'Gestor de Cuenta Dedicado',
        'Soporte 24/7'
      ],
      isPopular: false
    }
  ];

  return (
    <section id="precios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Planes y Precios Flexibles
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Elige el plan que mejor se adapte a las necesidades de tu negocio.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.isPopular ? 'border-4 border-blue-600' : 'border border-gray-200'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    Más Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <div className="mb-8">
                {plan.price === 'Custom' ? (
                  <p className="text-4xl font-extrabold text-gray-900">Personalizado</p>
                ) : (
                  <p className="text-5xl font-extrabold text-gray-900">
                    ${plan.price}<span className="text-xl font-medium text-gray-500">/mes</span>
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all ${
                  plan.isPopular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                }`}
              >
                {plan.price === 'Custom' ? 'Contactar Ventas' : 'Comprar Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
