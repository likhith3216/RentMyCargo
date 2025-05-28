import React from 'react';
import VehicleCard from './VehicleCard';
import { vehiclesData } from '../data';

const Bikes = () => {
  return (
    <div className="vehicles-list">
      {vehiclesData.bikes.map(bike => (
        <VehicleCard key={bike.id} vehicle={bike} type="bike" />
      ))}
    </div>
  );
};

export default Bikes;