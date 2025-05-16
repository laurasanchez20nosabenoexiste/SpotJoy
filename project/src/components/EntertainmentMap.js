import React from 'react';

const EntertainmentMap = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-bold text-lg mb-4">Lugares cercanos</h2>
      <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Mapa interactivo aparecerá aquí</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button className="bg-blue-100 text-blue-600 p-2 rounded-lg text-sm font-medium">
          Restaurantes
        </button>
        <button className="bg-green-100 text-green-600 p-2 rounded-lg text-sm font-medium">
          Eventos
        </button>
        <button className="bg-purple-100 text-purple-600 p-2 rounded-lg text-sm font-medium">
          Cultura
        </button>
        <button className="bg-yellow-100 text-yellow-600 p-2 rounded-lg text-sm font-medium">
          Deportes
        </button>
      </div>
    </div>
  );
};

export default EntertainmentMap;