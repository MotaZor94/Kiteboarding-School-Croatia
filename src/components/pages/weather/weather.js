import React from 'react';
import weatherLogic from '../weather/weatherForecastLogic'

class Weather extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: 'data being loaded',
      loaded: false,
      hourlyCards: false,
      dailyCards: false
    };

    this.prepareWheaterHourly = this.prepareWheaterHourly.bind(this)
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
    this.prepareWheaterHourly()
    this.prepareWeatherDaily()
  }

  prepareWheaterHourly () {
    const { data } = this.state.data.hourly
    const hourlyCards = data.map((x, i) => {
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
    )})

    this.setState({
      ...this.state,
      hourlyCards
    })
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
    const { hourlyCards, dailyCards } = this.state
    return (
      <div className="weather-card-wrap">
        <div className="wheather-hourly-panel">
        {Boolean(hourlyCards) && hourlyCards}
        </div>
        <div className="wheater-daily-panel">
        {Boolean(dailyCards) && dailyCards}
        </div>
      </div>
    );
  }
}

export default Weather;
