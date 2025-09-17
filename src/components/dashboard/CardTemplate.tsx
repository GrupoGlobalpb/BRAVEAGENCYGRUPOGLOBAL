import React from 'react';
import { Phone, Mail, Globe, Building } from 'lucide-react';

interface CardDesign {
  id: number;
  name: string;
  bgColor: string;
  textColor: string;
  person: {
    name: string;
    jobTitle: string;
    company: string;
    phone: string;
    email: string;
    website: string;
  };
  logoUrl: string;
  pattern?: string;
}

interface CardTemplateProps {
  design: CardDesign;
}

const CardTemplate: React.FC<CardTemplateProps> = ({ design }) => {
  return (
    <div className="group">
      <div 
        className={`relative w-full aspect-[1.7] ${design.bgColor} ${design.textColor} rounded-xl shadow-lg p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105`}
        style={{ backgroundImage: design.pattern ? `url(${design.pattern})` : 'none' }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold">{design.person.name}</h3>
            <p className="text-sm opacity-80">{design.person.jobTitle}</p>
          </div>
          <img src={design.logoUrl} alt="Logo" className="h-10 w-10 rounded-full bg-white p-1" />
        </div>

        <div className="relative z-10">
          <div className="text-right">
            <p className="font-semibold text-lg">{design.person.company}</p>
          </div>
          <div className="mt-4 text-xs space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span>{design.person.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>{design.person.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3" />
              <span>{design.person.website}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <h4 className="font-semibold text-gray-800">{design.name}</h4>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Seleccionar
        </button>
      </div>
    </div>
  );
};

export default CardTemplate;
