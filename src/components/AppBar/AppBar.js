import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

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
    return (
      <div className="app-bar-main-panel">
        <Link key="locationBtn" to="/location">
          <div className="app-bar-icon-wrap location-icon" onClick={() => this.handleSelection('location')}>
            {location ? <LocationColorIcon className="app-bar-icon"/> : <LocationIcon fill="#A4A4A4" className="app-bar-icon"/>}
            <p style={location ? { color:"#1F95B9" } : { color:"#A4A4A4" }} className ="app-bar-desc  location">LOCATION</p>
          </div>
        </Link>

        <Link key="weatherBtn" to="/weather">
          <div className="app-bar-icon-wrap weather-icon" onClick={() => this.handleSelection('weather')}>
            {weather ? <WeatherColorIcon className="app-bar-icon" /> : <WeatherIcon fill="#A4A4A4" className="app-bar-icon"/>}
            <p style={ weather ? { color:"#1F95B9" } : { color:"#A4A4A4" }} className="app-bar-desc weather">WEATHER</p>
          </div>
        </Link>

        <Link key="homeBtn" to="/" onClick={() => this.handleSelection('home')}>
          <div className="app-bar-icon-wrap home-icon">
            <img alt="aenona"src={Logo} className="app-bar-icon home-png"></img>
          </div>
        </Link>

        <Link key="rentalBtn" to="/rental">
          <div className="app-bar-icon-wrap rental-icon" onClick={() => this.handleSelection('rental')}>
            {rental ? <KitesurfColorIcon className="app-bar-icon"/> : <KitesurfIcon fill="#A4A4A4" className="app-bar-icon"/>}
            <p style={ rental ? { color:"#1F95B9" } : { color:"#A4A4A4" }} className="app-bar-desc rental">RENTAL</p>
          </div>
        </Link>

        <Link key="aboutusBtn" to="/aboutus">
          <div className="app-bar-icon-wrap about-us-icon">
            <AboutusIcon fill="#A4A4A4" className="app-bar-icon" /> 
            <p style={ contactus ? { color:"#1F95B9" } : { color:"#A4A4A4" }} className="app-bar-desc aboutus">ABOUT US</p>
          </div>
        </Link>  
      </div>
    )
  }
}

export default AppBar;
