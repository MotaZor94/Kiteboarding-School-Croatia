import React from 'react';
import RentalCard from '../../RentalCard/RentalCard'

export default function rental() {
  return (
    <div className="rentalSection">
        <div className="RentalTitle">
        <h1>EXCEPTIONAL GEAR</h1>
        <h2>STUNNING CONDITIONS</h2>
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
