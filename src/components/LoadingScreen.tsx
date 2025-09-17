import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700 text-white font-sans">
      <h1 className="text-5xl md:text-6xl font-bold tracking-wider">BRAVE AGENCY</h1>
      <p className="text-2xl md:text-3xl font-light text-gray-200 mt-1">& GRUPO GLOBAL</p>
      
      <p className="mt-8 text-xl text-gray-100">Estamos Construyendo Tu Plataforma</p>
      <p className="mt-2 text-sm text-gray-300 max-w-md text-center px-4">
        Analizando tu solicitud y generando el código...
      </p>

      <div className="flex space-x-2 mt-6">
        <div 
          className="w-3 h-3 bg-blue-400 rounded-full" 
          style={{ animation: 'bounce-delay 1.4s infinite ease-in-out both', animationDelay: '-0.32s' }}
        />
        <div 
          className="w-3 h-3 bg-blue-400 rounded-full" 
          style={{ animation: 'bounce-delay 1.4s infinite ease-in-out both', animationDelay: '-0.16s' }}
        />
        <div 
          className="w-3 h-3 bg-blue-400 rounded-full" 
          style={{ animation: 'bounce-delay 1.4s infinite ease-in-out both' }}
        />
      </div>

      <div className="absolute bottom-10 flex items-center space-x-2 text-sm">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-green-400">Terminal Lista</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
