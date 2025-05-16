import React from 'react';

const AlertCard = ({ type, title, message, time }) => {
  const getColor = () => {
    switch(type) {
      case 'weather': return 'bg-yellow-100 border-yellow-400';
      case 'emergency': return 'bg-red-100 border-red-400';
      case 'entertainment': return 'bg-green-100 border-green-400';
      default: return 'bg-gray-100 border-gray-400';
    }
  };

  return (
    <div className={`${getColor()} border-l-4 p-4 mb-3 rounded-r-lg shadow-sm`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm">{message}</p>
        </div>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  );
};

export default AlertCard;