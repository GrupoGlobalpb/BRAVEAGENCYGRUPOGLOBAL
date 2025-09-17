import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold text-white">BRAVE AGENCY</span>
              <div className="ml-3 text-sm text-gray-400 font-medium border-l border-gray-600 pl-3">
                & GRUPO GLOBAL
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando empresas con soluciones estratégicas innovadoras. 
              Más de 10 años impulsando el crecimiento empresarial a nivel global.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Consultoría Estratégica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transformación Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketing Corporativo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gestión Financiera</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Expansión Internacional</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Desarrollo Organizacional</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Equipo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Noticias</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <div>Calle Carril De La Cordobesa nro 29</div>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <div>(+34) 643925187</div>
                  <div>(+34) 677058858</div>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                <div>antonio.atencioncliente@gmail.com</div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-md font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} BRAVE AGENCY & GRUPO GLOBAL. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 mt-4 lg:mt-0 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Política de Privacidad</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Términos de Servicio</Link>
              <Link to="/cookies-policy" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
