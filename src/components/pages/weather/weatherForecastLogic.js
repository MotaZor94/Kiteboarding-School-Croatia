import fetchRequest from '../../fetch/fetchRequest'

class WeatherForecastLogic{        
    constructor(name) {
        this.name = name
    }

    getWeatherStatus(currently, daily) {
        const cld = Math.floor((currently.cloudCover * 10) / 2)
        const status = currently.icon

        const sunriseUnix = daily.data[1].sunriseTime
        const sunriseHour = new Date(sunriseUnix * 1000).getHours()
        // const sunriseMinute = new Date(sunriseUnix * 1000).getMinutes()
        
        const sunsetUnix = daily.data[1].sunsetTime
        const sunsetHour = new Date(sunsetUnix * 1000).getHours()
        // const sunsetMinute = new Date(sunsetUnix * 1000).getMinutes()

        const hour = new Date().getHours()
        // const minute = new Date().getMinutes()

        // console.log('now:', hour,minute, 'sunrise:', sunriseHour, sunriseMinute, 'sunset:', sunsetHour, sunsetMinute)
        switch (true) {
            case hour === sunriseHour:
                console.log('yes sun is rising')
                return 'morning'

            case hour === sunsetHour:
                console.log('yes its sunset')
                return 'evening'

            case cld >= 4:
                console.log('yes cloudyday')
                return "cloudy-day"

            case (status === "clear-night" || 
                status ==="partly-cloudy-night"):
                console.log('yes night')
                return "night"

            case status === "thunderstorm":
                console.log('yes night')
                return "night"

            default:
                console.log('yes default')
                return "clear-day"
        }
    }

    updateWeather() {
        try {
            // const data = fetchRequest('http://localhost:5000/darksky');
            const data = fetchRequest('/darksky');
            return data
        } catch (error) {
            console.log(error);
        }
    }
}

const weather = new WeatherForecastLogic(weather)

export default weather
