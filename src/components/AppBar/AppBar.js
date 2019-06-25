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
    <Link to="/location" >
      <div className="app-bar-icon-wrap location-icon" onClick={() => this.handleClick('location')}>
        {location ? <LocationColorIcon className="app-bar-icon"/> : <LocationIcon fill="#A4A4A4" className="app-bar-icon"/>}
        <p style={location ? {color:"#1F95B9"}:{color:"#A4A4A4"}} className="app-bar-desc location">LOCATION</p>
      </div>
    </Link>

    <Link to="/weather">
    <div className="app-bar-icon-wrap weather-icon" onClick={() => this.handleClick('weather')}>
    {weather ? <WeatherColorIcon className="app-bar-icon" /> : <WeatherIcon fill="#A4A4A4" className="app-bar-icon"/>}
        <p style={weather ? {color:"#1F95B9"}:{color:"#A4A4A4"}} className="app-bar-desc weather">WEATHER</p>
    </div>
    </Link>

    <Link to="/home" onClick={() => this.handleClick('home')}>
    <div className="app-bar-icon-wrap home-icon">
    <img alt="aenona"src={Logo} className="app-bar-icon home-png"></img>
    </div>
    </Link>

    <Link to="/rental">
    <div className="app-bar-icon-wrap rental-icon" onClick={() => this.handleClick('rental')}>
    {rental ? <KitesurfColorIcon className="app-bar-icon"/> : <KitesurfIcon fill="#A4A4A4" className="app-bar-icon"/>}
        <p style={rental ? {color:"#1F95B9"}:{color:"#A4A4A4"}} className="app-bar-desc rental">RENTAL</p>
    </div>
    </Link>

    <Link to="/aboutus">
    <div className="app-bar-icon-wrap about-us-icon">
    <AboutusIcon fill="#A4A4A4" className="app-bar-icon" /> 
        <p style={contactus ? {color:"#1F95B9"}:{color:"#A4A4A4"}} className="app-bar-desc aboutus">ABOUT US</p>
    </div>
    </Link>  
  </div>
    )
  }
}

export default AppBar;
