import React from 'react';
import { Link } from 'react-router-dom';

import SVG from 'react-inlinesvg' // uninstall this
import LocationIcon from '../../images/icons/location.svg'
import WeatherIcon from '../../images/icons/cloud.svg'
import Logo from '../../images/icons/logo.png'
import KitesurfIcon from '../../images/icons/kitesurf.svg'
import AboutusIcon from '../../images/icons/about-us.svg'

import LocationColorIcon from '../../images/icons/location-color.svg'
import WeatherColorIcon from '../../images/icons/cloud-color.svg'
import KitesurfColorIcon from '../../images/icons/kitesurf-color.svg'

class AppBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: {
        location: false,
        weather: false,
        home: false,
        rental: false,
        contactus: false
      }
    }
  }

  handleClick(type) {
    this.setState({ selected: {
      [type]: true 
      }
    })
  }

  render() {
    const { selected: { location, weather, home, rental, contactus} } = this.state
    return (
      <div className="app-bar-main-panel">
    <Link to="/location">
      <div className="app-bar-location" onClick={() => this.handleClick('location')}>
        {location ? <LocationColorIcon /> : <LocationIcon />}
        <p className="app-bar-desc location">LOCATION</p>
      </div>
    </Link>

    <Link to="/weather">
    <div className="app-bar-weather" onClick={() => this.handleClick('weather')}>
    {weather ? <WeatherColorIcon /> : <WeatherIcon />}
        <p className="app-bar-desc location">WEATHER</p>
    </div>
    </Link>

    <Link to="/home" onClick={() => this.handleClick('home')}>
    <div className="app-bar-home">
    <img alt="aenona"src={Logo}></img>
    </div>
    </Link>

    <Link to="/rental">
    <div className="app-bar-rental" onClick={() => this.handleClick('rental')}>
    {rental ? <KitesurfColorIcon /> : <KitesurfIcon />}
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
    )
  }
}

export default AppBar;
