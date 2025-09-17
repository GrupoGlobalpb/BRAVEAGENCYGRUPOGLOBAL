import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CreditCard, 
  Users, 
  FileText, 
  Layout, 
  Bell, 
  UserCheck, 
  Settings,
  Menu,
  X,
  Globe,
  LogOut
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navigation = [
    { name: 'Tablero', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Tarjetas', href: '/dashboard/tarjetas', icon: CreditCard },
    { name: 'Contactos', href: '/dashboard/contactos', icon: Users },
    { name: 'Reportes', href: '/dashboard/reportes', icon: FileText },
    { name: 'Plantillas', href: '/dashboard/plantillas', icon: Layout },
    { name: 'Notificaciones', href: '/dashboard/notificaciones', icon: Bell },
    { name: 'Usuarios', href: '/dashboard/usuarios', icon: UserCheck },
    { name: 'Ajustes', href: '/dashboard/ajustes', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-gradient-to-b from-teal-500 to-teal-600">
          <div className="flex h-16 items-center justify-between px-4">
            <Link to="/" className="flex items-center">
              <span className="text-lg font-bold text-white">BRAVE AGENCY</span>
            </Link>
            <button
              type="button"
              className="text-white hover:text-gray-200"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-4">
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-white bg-opacity-20 text-white'
                        : 'text-white hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-gradient-to-b from-teal-500 to-teal-600">
          <div className="flex h-16 flex-shrink-0 items-center px-4">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-white">BRAVE AGENCY</span>
            </Link>
          </div>
          
          <div className="px-4 py-4 border-y border-white border-opacity-20">
            <div className="text-white">
              <div className="font-semibold text-lg">Admin</div>
              <div className="text-sm text-teal-100">admin@braveagency.com</div>
            </div>
          </div>

          <nav className="flex-1 px-4 py-4">
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-white bg-opacity-20 text-white'
                        : 'text-white hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
          
          <div className="px-4 py-4 border-t border-white border-opacity-20">
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-4 py-3 text-sm font-medium rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              className="lg:hidden text-gray-500 hover:text-gray-600"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-1"></div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">ES</div>
              <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                <Globe className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        <main className="py-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
