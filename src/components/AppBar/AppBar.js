import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import SVG from 'react-inlinesvg' // uninstall this
import LocationIcon from '../../images/icons/Location.png'
import WeatherIcon from '../../images/icons/Weather.png'
import Logo from '../../images/icons/logo.png'
import KitesurfIcon from '../../images/icons/Rental.png'
import AboutusIcon from '../../images/icons/About.png'

import LocationColorIcon from '../../images/icons/Location_fill.png'
import WeatherColorIcon from '../../images/icons/Weather_fill.png'
import KitesurfColorIcon from '../../images/icons/Rental_fill.png'
import AboutColorIcon from '../../images/icons/About_fill.png'

class AppBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current: '',
      selected: {
        location: false,
        weather: false,
        home: false,
        rental: false,
        contactus: false
      }
    }

    this.handleSelection = this.handleSelection.bind(this)
  }

  componentDidMount() {
    const { pathname } = this.props.location
    console.log(pathname)
    const path = pathname.split('/')[1]
    if (path === "") {
      // this.handleSelection('home')
    } else {
      this.handleSelection(path)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname === prevProps.location.pathname) {
      return null
    }
    const { pathname } = this.props.location
    const path = pathname.split('/')[1]
    this.handleSelection(path)
  }

  async handleSelection(type) {
    await this.setState({ selected: {
      [type]: true 
      }
    })
  }

  render() {
    const { selected: { location, weather, home, rental, contactus} } = this.state
    console.log(contactus)
    return (
      <div className="app-bar-main-panel">
        <Link key="locationBtn" className="icon-link" to="/location">
          <div className="app-bar-icon-wrap location-icon" onClick={() => this.handleSelection('location')}>
            {location ? <img alt="location" src={LocationColorIcon} className="app-bar-icon"></img> : <img alt="location" src={LocationIcon} className="app-bar-icon"></img>}
            <p style={location ? { color:"#1F95B9" } : { color:"#A4A4A4" }} className ="app-bar-desc  location">LOCATION</p>
          </div>
        </Link>

        <Link key="weatherBtn" className="icon-link" to="/weather">
          <div className="app-bar-icon-wrap weather-icon" onClick={() => this.handleSelection('weather')}>
            {weather ? <img alt="location" src={WeatherColorIcon} className="app-bar-icon"></img> : <img alt="location" src={WeatherIcon} className="app-bar-icon"></img>}
            <p style={ weather ? { color:"#1F95B9" } : { color:"#A4A4A4" }} className="app-bar-desc weather">WEATHER</p>
          </div>
        </Link>

        <Link key="homeBtn" className="icon-link" to="/" onClick={() => this.handleSelection('home')}>
          <div className="app-bar-icon-wrap home-icon">
            <img alt="aenona"src={Logo} className="app-bar-icon home-png"></img>
          </div>
        </Link>

        <Link key="rentalBtn" className="icon-link" to="/rental">
          <div className="app-bar-icon-wrap rental-icon" onClick={() => this.handleSelection('rental')}>
            {rental ? <img alt="location" src={KitesurfColorIcon} className="app-bar-icon"></img> : <img alt="location" src={KitesurfIcon} className="app-bar-icon"></img>}
            <p style={ rental ? { color:"#1F95B9" } : { color:"#A4A4A4" }} className="app-bar-desc rental">RENTAL</p>
          </div>
        </Link>

        <Link key="aboutusBtn" className="icon-link" to="/aboutus">
          <div className="app-bar-icon-wrap about-us-icon" onClick={() => this.handleSelection('contactus')}>
          {contactus ? <img alt="location" src={AboutColorIcon} className="app-bar-icon"></img> : <img alt="location" src={AboutusIcon} className="app-bar-icon"></img>}
            <p style={ contactus ? { color:"#1F95B9" } : { color:"#A4A4A4" }} className="app-bar-desc aboutus">ABOUT US</p>
          </div>
        </Link>  
      </div>
    )
  }
}

export default AppBar;
