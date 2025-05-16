import React, { useState, useEffect } from 'react';

const LocationTracker = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (err) => {
          setError(err.message);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      setError('Geolocation no está soportada en tu navegador');
    }
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-bold text-lg mb-2">Tu ubicación actual</h2>
      {error ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : location ? (
        <p className="text-gray-700">
          Lat: {location.lat.toFixed(4)}, Lng: {location.lng.toFixed(4)}
        </p>
      ) : (
        <p className="text-gray-500">Obteniendo ubicación...</p>
      )}
    </div>
  );
};

export default LocationTracker;