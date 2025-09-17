import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import { Search, Filter, LayoutGrid, List } from 'lucide-react';
import CardTemplate from './CardTemplate';

// Generate mock data for 30 card designs
const generateCardDesigns = (count: number) => {
  const designs = [];
  const colors = [
    'bg-gray-800', 'bg-white', 'bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-400', 
    'bg-indigo-600', 'bg-purple-600', 'bg-pink-500', 'bg-teal-500'
  ];
  const textColors = {
    'bg-gray-800': 'text-white',
    'bg-white': 'text-gray-800',
    'bg-blue-500': 'text-white',
    'bg-red-500': 'text-white',
    'bg-green-500': 'text-white',
    'bg-yellow-400': 'text-gray-800',
    'bg-indigo-600': 'text-white',
    'bg-purple-600': 'text-white',
    'bg-pink-500': 'text-white',
    'bg-teal-500': 'text-white',
  };

  for (let i = 0; i < count; i++) {
    const bgColor = faker.helpers.arrayElement(colors);
    designs.push({
      id: i + 1,
      name: `Diseño ${i + 1}`,
      bgColor: bgColor,
      textColor: textColors[bgColor as keyof typeof textColors],
      person: {
        name: faker.person.fullName(),
        jobTitle: faker.person.jobTitle(),
        company: faker.company.name(),
        phone: faker.phone.number(),
        email: faker.internet.email().toLowerCase(),
        website: faker.internet.domainName(),
      },
      logoUrl: `https://logo.clearbit.com/${faker.internet.domainName()}`,
      pattern: `https://www.transparenttextures.com/patterns/${faker.helpers.arrayElement(['az-subtle', 'cartographer', 'diagmonds', 'graphy', 'light-sketch', 'wood-pattern'])}.png`
    });
  }
  return designs;
};

const cardDesigns = generateCardDesigns(30);

const Tarjetas: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredDesigns = cardDesigns.filter(design => 
    design.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Diseños de Tarjetas</h1>
          <p className="mt-2 text-sm text-gray-700">
            Elige una plantilla para tu nueva tarjeta digital.
          </p>
        </div>
      </div>

      {/* Filters & View Options */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Buscar diseño..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </button>
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              <LayoutGrid className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Card Designs Grid */}
      <div className={`mt-8 grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
        {filteredDesigns.map((design) => (
          <CardTemplate key={design.id} design={design} />
        ))}
      </div>
    </div>
  );
};

export default Tarjetas;
