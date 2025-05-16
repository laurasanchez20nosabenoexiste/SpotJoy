import React from 'react';

const SafetyControls = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-bold text-lg mb-4">Controles de Seguridad</h2>
      <div className="space-y-3">
        <button className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition">
          Botón de Emergencia
        </button>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Compartir Ubicación
        </button>
        <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-300 transition">
          Configuración
        </button>
      </div>
    </div>
  );
};

export default SafetyControls;