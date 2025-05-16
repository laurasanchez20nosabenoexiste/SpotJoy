import React, { useState } from 'react';
import AlertCard from './AlertCard';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'weather',
      title: 'Alerta de Tormenta',
      message: 'Tormenta eléctrica esperada en tu área en 30 minutos',
      time: 'Hace 5 min'
    },
    {
      id: 2,
      type: 'emergency',
      title: 'Incidente cercano',
      message: 'Accidente reportado a 2km de tu ubicación',
      time: 'Hace 15 min'
    },
    {
      id: 3,
      type: 'entertainment',
      title: 'Evento cercano',
      message: 'Concierto gratuito en el parque central',
      time: 'Hace 1 hora'
    }
  ]);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-bold text-lg mb-4">Alertas Recientes</h2>
      <div className="space-y-3">
        {notifications.map(alert => (
          <AlertCard key={alert.id} {...alert} />
        ))}
      </div>
    </div>
  );
};

export default NotificationCenter;