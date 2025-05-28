import React from 'react';
import VehicleCard from './VehicleCard';
import { vehiclesData } from '../data';

const Cars = () => {
  return (
    <div className="vehicles-list">
      {vehiclesData.cars.map(car => (
        <VehicleCard key={car.id} vehicle={car} type="car" />
      ))}
    </div>
  );
};

export default Cars;