import fetchRequest from '../../fetch/fetchRequest'

class WeatherForecastLogic{        
    constructor(name) {
        this.name = name
    }

    getWeatherStatus(currently) {
        const cld = Math.floor((currently.cloudCover * 10) / 2)
        const status = currently.icon
        switch (true) {
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
            const data = fetchRequest('/darksky');
            return data
        } catch (error) {
            console.log(error);
        }
    }
}

const weather = new WeatherForecastLogic(weather)

export default weather
