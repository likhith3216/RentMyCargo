import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import VehicleCard from './VehicleCard'; 
import Offers from './Offers'; 
import { vehiclesData } from '../data'; 

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); 

  const handleSearch = (term) => {
    if (term.trim() === '') {
      setSearchResults([]); 
    } else {
      const results = [
        ...vehiclesData.bikes.filter(bike => 
          bike.make.toLowerCase().includes(term.toLowerCase()) || 
          bike.model.toLowerCase().includes(term.toLowerCase())
        ),
        ...vehiclesData.cars.filter(car => 
          car.make.toLowerCase().includes(term.toLowerCase()) || 
          car.model.toLowerCase().includes(term.toLowerCase())
        ),
        ...vehiclesData.cargo.filter(truck => 
          truck.make.toLowerCase().includes(term.toLowerCase()) || 
          truck.model.toLowerCase().includes(term.toLowerCase())
        )
      ];
      setSearchResults(results); 
    }
  };

  const handleItemClick = (vehicle) => {
    if (vehicle.type === 'bike') {
      navigate('/bikes'); 
    } else if (vehicle.type === 'car') {
      navigate('/cars'); 
    } else if (vehicle.type === 'cargo') {
      navigate('/cargo'); 
    }
  };

  return (
    <div className="home">
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map(vehicle => (
            <div key={vehicle.id} onClick={() => handleItemClick(vehicle)} style={{ cursor: 'pointer' }}>
              <VehicleCard vehicle={vehicle} type={vehicle.type} />
            </div>
          ))
        ) : null}
      </div>
      <Offers /> 
    </div>
  );
};

export default Home;