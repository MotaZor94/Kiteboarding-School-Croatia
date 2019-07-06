import React from 'react';
import RentalCard from '../../RentalCard/RentalCard'

export default function rental({ location }) {

    let opened = null
    if (location.pathname === '/rental') {
      opened = 'opened'
    }
  return (
    <div className={`rentalSection ${opened}`}>
        <div className="RentalTitle">
        <h1>RENTALS WITH ASSISTANCE AND TUTORIAL ON HOW TO KITE</h1>
        <h3>RENTALS WITH ASSISTANCE AND TUTORIAL ON HOW TO KITE</h3>
        </div>
          <RentalCard 
          heading1="Land Rental"
          heading2="Trainer Kite"
          level="Beginner"
          price="110 Euro"
          booknow="BOOK NOW"
           />
           <RentalCard 
          heading1="Land Rental"
          heading2="Trainer Kite"
          level="Advanced"
          price="110 Euro"
          booknow="BOOK NOW"
           />
    </div>
  );
}
