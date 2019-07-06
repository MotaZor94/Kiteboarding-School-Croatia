import React from 'react';
import HeroSection from '../../HeroSection/HeroSection'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

export default function main({ location }) {
  
  let opened = null;
  if (location.pathname === '/') {
    opened = 'opened'
  }
  return (
    <div className={`mainSection ${opened}`}>
      <h1><strong>Kiteboarding</strong><br/>equipment rentals</h1>
      <h3>Push your kiteboarding skills with our astonishing equipment</h3>
      <h3><strong>Ready to surf?</strong></h3>
      <div className="main-button-wrapper">
      <Link to="/rental"><button className="rental-button">RENT NOW</button></Link>
      <Link to="/weather"><button className="weather-button">WEATHER REPORT</button></Link>
      </div>
    </div>
  );
}
