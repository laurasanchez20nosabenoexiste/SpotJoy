import React from 'react';

const GeoAlertHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">GeoAlert</h1>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">
          Mi Perfil
        </button>
      </div>
    </header>
  );
};

export default GeoAlertHeader;