import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            La experiencia nos avalan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Estamos listos para ayudarte a transformar tu empresa. Contáctanos para una consulta gratuita.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium">Oficina Principal</div>
                    <div className="text-blue-100">Calle Carril De La Cordobesa nro 29</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium">Teléfonos</div>
                    <div className="text-blue-100">(+34) 643925187</div>
                    <div className="text-blue-100">(+34) 677058858</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-blue-100">antonio.atencioncliente@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium">Horario</div>
                    <div className="text-blue-100">Lun - Vie: 9:00 - 18:00</div>
                    <div className="text-blue-100">Sáb: 9:00 - 14:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+34 611 222 333"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="consultoria">Consultoría Estratégica</option>
                    <option value="digital">Transformación Digital</option>
                    <option value="marketing">Marketing Corporativo</option>
                    <option value="finanzas">Gestión Financiera</option>
                    <option value="internacional">Expansión Internacional</option>
                    <option value="organizacional">Desarrollo Organizacional</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                  ></textarea>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all hover:shadow-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </button>
              </div>

              <div className="mt-4 text-sm text-gray-600 text-center">
                * Campos obligatorios. Te responderemos en menos de 24 horas.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
