import React from 'react';
import MapHandler from '../MapHandler';

// Dashboard.js
const Dashboard = () => {
  return (
    <div className='flex flex-row gap-4'>
      <div className="flex-1 p-3">
        <MapHandler />
      </div>
    </div>
  );
};

export default Dashboard;
