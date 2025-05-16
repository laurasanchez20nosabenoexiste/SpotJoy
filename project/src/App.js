import React from 'react';
import GeoAlertHeader from './components/GeoAlertHeader';
import LocationTracker from './components/LocationTracker';
import NotificationCenter from './components/NotificationCenter';
import EntertainmentMap from './components/EntertainmentMap';
import SafetyControls from './components/SafetyControls';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <GeoAlertHeader />
      <main className="container mx-auto p-4 space-y-4">
        <LocationTracker />
        <NotificationCenter />
        <EntertainmentMap />
        <SafetyControls />
      </main>
    </div>
  );
};

export default App;

// DONE