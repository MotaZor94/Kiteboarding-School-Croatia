import React from 'react';
import HeroSection from '../../HeroSection/HeroSection'
import ImageComp from '../../ImageComp/ImageComp'
import NinCroatia from '../../../images/nin.jpg'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

export default function main() {
  return (
    <div className="mainSection">
      <h1><strong>Kiteboarding</strong><br/>equipment rentals</h1>
      <h3>Push your kiteboarding skills with our astonishing equipment</h3>
      <h3><strong>Ready to surf?</strong></h3>
      <div className="main-button-wrapper">
      <Link  className="icon-link" to="/rental"><button className="rental-button">RENT NOW</button></Link>
      <Link className="icon-link" to="/weather"><button className="weather-button">WEATHER REPORT</button></Link>
      </div>
      <div className="Image-Wrap">
      <ImageComp
       image={NinCroatia}
       imageheading = "Discover Nin,Croatia"
       imagedesc = "Croatian Pre-Romanesque Catholic church originating from the 9th century"
       />
       <ImageComp
       image={NinCroatia}
       imageheading = "Discover Nin,Croatia"
       imagedesc = "Croatian Pre-Romanesque Catholic church originating from the 9th century"
       />
       <ImageComp
       image={NinCroatia}
       imageheading = "Discover Nin,Croatia"
       imagedesc = "Croatian Pre-Romanesque Catholic church originating from the 9th century"
       />
       <ImageComp
       image={NinCroatia}
       imageheading = "Discover Nin,Croatia"
       imagedesc = "Croatian Pre-Romanesque Catholic church originating from the 9th century"
       />
       <ImageComp
       image={NinCroatia}
       imageheading = "Discover Nin,Croatia"
       imagedesc = "Croatian Pre-Romanesque Catholic church originating from the 9th century"
       />
       </div>
      
    </div>
  );
}
