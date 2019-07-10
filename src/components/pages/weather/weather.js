import React from 'react';
import weatherLogic from '../weather/weatherForecastLogic'

import WeatherDataPanel from '../../ui/weatherDataPanel/WeatherDataPanel'
import HourlyWeatherCard from '../../ui/hourlyWeatherCard/HourlyWeatherCard'
import DailyWeatherCard from '../../ui/dailyWeatherCard/DailyWeatherCard'

// import PartlyCloudyDayIcon from '../../../images/weatherIcons/partly-cloudy-day.png'

class Weather extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loaded: false,
      hourlyCards: false,
      dailyCards: false
    };

    // this.prepareWheaterHourly = this.prepareWheaterHourly.bind(this)
    this.prepareWeatherDaily = this.prepareWeatherDaily.bind(this)
  }

  async componentDidMount() {
    try {
      this.setState({
        data: await weatherLogic.updateWeather(),
        loaded: true
      })
    } catch (error) {
      console.log(error);
    }
    this.prepareWeatherDaily()
  }
  

  prepareWeatherDaily () {
    const { data } = this.state.data.daily
    const dailyCards = data.map(day => {
      const date = new Date(day.time * 1000)
      const dayDate = date.getDate()

      return (
        <div className="weather-daily-card">
          <div className="weather-daily-date">{dayDate}</div>
          <div className="weather-daily-temperature-max">{((day.apparentTemperatureMax - 32)*(5/9)).toFixed(1)}</div>
          <div className="weather-daily-temperature-min">{((day.apparentTemperatureMin - 32)*(5/9)).toFixed(1)}</div>
          <div className="weather-daily-wind-speed">{(day.windSpeed * .87).toFixed(1)}</div>
        </div>
      )
    })

    this.setState({
      ...this.state,
      dailyCards
    })
  }

  render() {
    const { location: { pathname } } = this.props

    let opened = null
    if (pathname === '/weather') {
      console.log(pathname)
      opened = 'opened'
    }

    const { data } = this.state
    let hourly = null
    let daily = null
    let currently = null
    if (data) {
      hourly = data.hourly.data
      daily = data.daily.data
      currently = data.currently
      // console.log(hourly)
    }

    // console.log('sending', daily)

    // const { data } = this.state.data.daily
    return (
      <div className={`weather-panel ${opened}`}>
        <WeatherDataPanel currently={currently} />
        <div className="wheather-hourly-panel">
          <HourlyWeatherCard hourlyData={hourly} />
        </div>
        <div className="wheater-daily-panel">
          <DailyWeatherCard dailyData={daily} />
        </div>
      </div>
    );
  }
}

export default Weather;
