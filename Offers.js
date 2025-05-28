import React from 'react';

const Offers = () => {
  const offerImages = [
    '/bikeoffer.jpg',  
    '/bikeoffer2.webp',  
    '/bikeoffer3.jpeg',
    '/bikeoffer4.avif',  
    '/caroffer.jpeg',  
    '/caroffer2.jpg',
    '/caroffer3.jpg', 
    '/caroffer4.webp',
    '/cargooffer.webp',  
    '/cargooffer2.jpg',
    '/cargooffer3.webp', 
    '/cargooffer4.jpg',
  ];
  const typeImages = [
    { src: '/biketype.jpeg', alt: 'Bike Type', link: '/Bikes' },
    { src: '/cartype.jpeg', alt: 'Car Type', link: '/Cars' },
    { src: '/trucktype.jpeg', alt: 'Truck Type', link: '/Cargo' },
  ];
  return (
    <div>
      <div className='types'>
      {typeImages.map((image, index) => (
        <a key={index} href={image.link} className="type-link">
          <img src={image.src} alt={image.alt} className="type-image" />
        </a>
      ))}
    </div>
      <h1>Offers & New Arrivals</h1> 
    <div className="offers">      
      {offerImages.map((image, index) => (
        <img key={index} src={image} alt={`Offer ${index + 1}`} className="offer-image" />
      ))}
    </div>
    </div>
  );
};

export default Offers;