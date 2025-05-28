import React from 'react';
import VehicleCard from './VehicleCard';
import { vehiclesData } from '../data';

const Cargo = () => {
  return (
    <div className="vehicles-list">
      {vehiclesData.cargo.map(cargo => (
        <VehicleCard key={cargo.id} vehicle={cargo} type="cargo" />
      ))}
    </div>
  );
};

export default Cargo;