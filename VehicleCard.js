import React from 'react';
const VehicleCard = ({ vehicle, type }) => {
  
 const handleBooking = () => {
     alert(`Booking confirmed for ${vehicle.make} ${vehicle.model}. An email will be sent to you.`);
 };

 return (
     <div className="vehicle-card">
         <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} />
         <h2>{vehicle.make} {vehicle.model}</h2>
         <p>Price: ₹{vehicle.price} per day</p>
         {(type === "bike" || type === "car" || type === "cargo") ? (
             <button onClick={handleBooking}>Book Now</button>
         ) : null}
     </div>
 );
};

export default VehicleCard;