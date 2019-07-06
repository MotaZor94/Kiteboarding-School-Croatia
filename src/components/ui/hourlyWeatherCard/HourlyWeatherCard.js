import React from 'react'
import ClearNightIcon from '../../../images/weatherIcons/clear-night.png'
import CoudyIcon from '../../../images/weatherIcons/cloudy.png'
import PartlyCloudyDayIcon from '../../../images/weatherIcons/partly-cloudy-day.png'
import RainyIcon from '../../../images/weatherIcons/rainy.png'
import SleetIcon from '../../../images/weatherIcons/sleet.png'
import SunnyIcon from '../../../images/weatherIcons/sunny.png'

function setIcon(status) {
    switch (status) {
        case 'clear-day':
            return SunnyIcon;

        case 'rain':
            return RainyIcon;

        case 'cloudy':
            return CoudyIcon

        case 'partly-cloudy-day':
            return PartlyCloudyDayIcon

        case 'partly-cloudy-night':
            return ClearNightIcon

        case 'sleet':
            return SleetIcon

        case 'clear-night':
            return ClearNightIcon

        default:
            return SunnyIcon
    }

}

export default function HourlyWeatherCard({ hourlyData }) {
    let hourlyCards = null
    if (hourlyData) {
        hourlyCards = hourlyData.map((x, i) => {
          if (i > 24) { return null }
          const date = new Date(x.time * 1000)
          const hour = date.getHours()
          
              
          
          return (
            <div key={i} className="weather-hourly-card">
              <div className="weather-hourly-time">{hour}</div>
              <img className="wheather-hourly-icon" alt="weather-icon" src={setIcon(x.icon)} />
              <div className="weather-hourly-temperature">{((x.temperature - 32) * (5/9)).toFixed(1)}C</div>
              {/* <div className="weather-hourly-windSpeedDesc">wind speed</div> */}
              <div className="weather-hrouly-windSpeed">{(x.windSpeed * .87).toFixed(1)} <span className='weather-hourly-knots'>knots</span></div>
            </div>
        )
        })
    }

    return hourlyCards
}
