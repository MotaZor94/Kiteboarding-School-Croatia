import React, { Component } from 'react'

export class WeatherDataPanel extends Component {
    render({ temperature, pressure, humidity, windSpeed, weatherState }) {
        return (
            <div className="weather-data-panel">

                <div className="weather-data-first">
                    <span className="weather-temp">{temperature}</span>
                    <span className="weather-state">{weatherState}</span>
                </div>

                <div className="weather-data-second">
                    <div className="weather-wind-wrap">
                        <span className="weather-wind-desc">wind</span>
                        <span className="weather-wind-value">{windSpeed}kn</span>
                    </div>

                    <div className="weather-humid-wrap">
                        <span className="weather-humid-desc">humidity</span>
                        <span className="weather-humid-value">{humidity}%</span>
                    </div>

                    <div className="weather-pressure-wrap">
                        <span className="weather-pressure-desc">pressure</span>
                        <span className="weather-pressure-value">{pressure}</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default WeatherDataPanel
