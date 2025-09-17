import React, { useState } from 'react';
import { Plus, Search, Download, Eye, Edit, Trash2, CreditCard, Users, BarChart3 } from 'lucide-react';

const DashboardHome: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const cardData = [
    {
      title: 'Tarjetas',
      count: 1,
      subtitle: 'Gratuito',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: CreditCard
    },
    {
      title: 'Tarjetas',
      count: 1,
      subtitle: 'Usadas actualmente',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: CreditCard
    },
    {
      title: 'Tarjetas',
      count: 0,
      subtitle: 'Restantes',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      icon: CreditCard
    }
  ];

  const tableData = [
    {
      folio: 'BRV-1395',
      codigo: 'XH-1395',
      fecha: '23/07/2023',
      tarjetas: '1 (Gratuito)',
      monto: 'Gratis',
      expira: '-',
      id: 1
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tablero</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:flex sm:space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            <CreditCard className="mr-2 h-4 w-4 text-teal-500" />
            Aplicar Códigos
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors">
            <Plus className="mr-2 h-4 w-4" />
            Crear Tarjeta
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div key={index} className={`${card.bgColor} rounded-xl p-6`}>
              <div className="flex items-center">
                <div className={`p-2 ${card.bgColor} rounded-lg`}>
                  <IconComponent className={`h-6 w-6 ${card.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{card.count}</p>
                  <p className={`text-sm ${card.color}`}>{card.subtitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Table Section */}
      <div className="mt-8 bg-white shadow-sm rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center space-x-4">
              <label className="text-sm text-gray-700">
                Mostrar
                <select className="ml-2 mr-2 border border-gray-300 rounded px-3 py-1 text-sm">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                registros
              </label>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Búsqueda:"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-teal-500">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Folio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Código
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Tarjetas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Monto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Expira
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  PDF
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.folio}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.codigo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.fecha}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.tarjetas}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.monto}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.expira}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Download className="h-4 w-4" />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-800">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-6 py-3 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Mostrando registros del 1 al 1 de un total de 1 registros
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded text-gray-500 cursor-not-allowed">
              Anterior
            </button>
            <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">
              1
            </button>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded text-gray-500 cursor-not-allowed">
              Siguiente
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-105">
          <CreditCard className="h-6 w-6" />
          <span className="sr-only">Comprar Tarjetas</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardHome;
