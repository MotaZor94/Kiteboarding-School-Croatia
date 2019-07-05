import React from 'react'

export default function HourlyWeatherCard({ hourlyData }) {
    let hourlyCards = null
    console.log('000000000000000000000000')
    console.log(hourlyData)
    if (hourlyData) {
        console.log('000000000000000000000000')
        console.log('000000000000000000000000')
        hourlyCards = hourlyData.map((x, i) => {
          if (i > 24) { return null }
          const date = new Date(x.time * 1000)
          const hour = date.getHours()
          
          return (
              <div className="weather-hourly-card">
              <div className="weather-hourly-time">{hour}</div>
              <div className="weather-hourly-temperature">{((x.temperature - 32) * (5/9)).toFixed(1)}C</div>
              <div className="weather-hourly-windIcon">windSpeed</div>
              <div className="weather-hrouly-windSpeed">{(x.windSpeed * .87).toFixed(1)} KNOTS</div>
            </div>
        )
        })
    }

    return hourlyCards
}
