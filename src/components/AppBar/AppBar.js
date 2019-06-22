import React from 'react';
import { Link } from 'react-router-dom';

import SVG from 'react-inlinesvg' // uninstall this
import LocationIcon from '../../images/icons/location.svg'
import WeatherIcon from '../../images/icons/cloud.svg'
import Logo from '../../images/icons/logo.png'
import KitesurfIcon from '../../images/icons/kitesurf.svg'
import AboutusIcon from '../../images/icons/about-us.svg'

const AppBar = () => (
  <div className="app-bar-main-panel">
    <Link to="/location">
      <div className="app-bar-location">
        <LocationIcon />
        <p className="app-bar-desc location">LOCATION</p>
      </div>
    </Link>

    <Link to="/weather">
    <div className="app-bar-weather">
    <WeatherIcon />
        <p className="app-bar-desc location">WEATHER</p>
    </div>
    </Link>

    <Link to="/home">
    <div className="app-bar-home">
    <img alt="aenona"src={Logo}></img>
    </div>
    </Link>

    <Link to="/rental">
    <div className="app-bar-rental">
    <KitesurfIcon />
        <p className="app-bar-desc location">RENTAL</p>
    </div>
    </Link>

    <Link to="/aboutus">
    <div className="app-bar-about-us">
    <AboutusIcon />
        <p className="app-bar-desc location">ABOUT US</p>
    </div>
    </Link>
    
    
      
    
  </div>
);

export default AppBar;
