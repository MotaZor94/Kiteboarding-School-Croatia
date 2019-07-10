import React from 'react'
import WindIcon from '../../../images/icons/wind.png'

const WeatherDataPanel = ({ currently }) => {
    console.log(currently)
    let weatherDataPanel = null
    if (currently) {
        const { windSpeed, temperature, summary, icon } = currently

        weatherDataPanel = (
            <div className="weather-data-panel">

                <div className="weather-data-first">
                    <span className="weather-temp">{((temperature - 32) * (5/9)).toFixed(1)} C</span>
                    <br />
                    <span className="weather-state">{summary}</span>
                </div>

                <div className="weather-data-second">        
                    <img className="weather-data-wind-icon" alt="wind-icon" src={WindIcon} />
                    <span className="weather-wind-value">{(windSpeed * .87).toFixed(1)} Knots</span>
                </div>
            </div>
        )
    }
    return weatherDataPanel
}


export default WeatherDataPanel
