import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'María González',
      position: 'CEO, TechnoVanguard S.A.',
      content: 'BRAVE AGENCY transformó completamente nuestra estrategia digital. En 6 meses aumentamos nuestras ventas en un 150% y optimizamos todos nuestros procesos. Su enfoque profesional y resultados excepcionales superaron todas nuestras expectativas.',
      rating: 5,
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Director General, Global Solutions',
      content: 'La consultoría estratégica de BRAVE AGENCY fue fundamental para nuestra expansión internacional. Su conocimiento del mercado global y su capacidad de ejecución nos permitió entrar exitosamente en 5 nuevos países.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      position: 'Directora de Marketing, InnovatePro',
      content: 'El equipo de BRAVE AGENCY redefinió nuestra identidad corporativa y estrategia de marketing. Los resultados fueron inmediatos: 200% más leads cualificados y un ROI excepcional en todas nuestras campañas.',
      rating: 5,
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Testimonios reales de empresas que han transformado su negocio con nuestras soluciones
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover bg-gray-200"
                  src={`https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=2563eb&color=fff`}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Reconocidos por la Excelencia
            </h3>
            <p className="text-gray-600 mb-8">
              Certificaciones y premios que avalan nuestra calidad y compromiso
            </p>
            
            {/* Awards/Certifications */}
            <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">ISO</span>
                </div>
                <span className="text-gray-700 font-medium">ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">★</span>
                </div>
                <span className="text-gray-700 font-medium">Premio Excelencia 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">PMI</span>
                </div>
                <span className="text-gray-700 font-medium">PMI Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
