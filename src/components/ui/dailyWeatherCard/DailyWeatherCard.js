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

function setColor(index) {
    switch (index) {
        case 1:
            return 'red'

        case 2:
            return 'blue'

        case 3:
            return 'green'

        case 4:
            return 'yellow'

        case 5:
            return 'pink'

        case 6:
            return 'brown'

        case 7:
            return 'orange'

        case 8:
            return 'purple'
    }
}

function setDay(index) {
    const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
    return days[index]
}

export default function DailyWeatherCard({ dailyData }) {
    let dailyCards = null
    if (dailyData) {
        dailyCards = dailyData.map((x, i) => {
            const time = new Date(x.time * 1000)
            const day = time.getDay()
            
            return (
                <div className="daily-weather-card">
                    <div className="daily-weather-date daily-desc">{setDay(day)}</div>
                    <div className="daily-weather-right">
                        <img className="wheather-hourly-icon" alt="weather-icon" src={setIcon(x.icon)} />
                        <div 
                            className="daily-weather-temp-max daily-desc">
                                {((x.temperatureHigh - 32) * (5/9)).toFixed(1)}
                                <span className="daily-weather-unit daily-desc">C |</span>
                        </div>
                        <div 
                            className="daily-weather-temp-low daily-desc">
                                {(x.windSpeed * .87).toFixed(1)}
                                <span className="daily-weather-unit daily-desc">Knots</span>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return dailyCards
}
