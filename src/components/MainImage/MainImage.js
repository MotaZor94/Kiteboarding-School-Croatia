import React, { Component } from 'react'
import Beach from '../../images/mainIllustration/main.png'
import Cloud from '../../images/mainIllustration/cloud.png'

import WeatherForecast from '../pages/weather/weatherForecastLogic'

import BlueBackground from '../../images/mainImage/bluebackground.svg'
import weather from '../pages/weather/weatherForecastLogic';

class MainImage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        console.log(weather)
        const result = weather.updateWeather()
        // console.log('main image mount')
        // console.log('data: ', weahter.getData())
        this.setState({
            ...this.state,
            data: result
        })
    }

    render() {
        console.log('main image render: ', this.state)
        
        return (
            <div className="weather-graphic">
              <img className="cloud" alt="sunny" src={Cloud}></img> 
              <img className="cloud1" alt="sunny" src={Cloud}></img> 
              <img className="cloud2" alt="sunny" src={Cloud}></img> 
              <img className="cloud3" alt="sunny" src={Cloud}></img> 
              <img className="hero" alt="sunny" src={Beach}></img> 
            </div>
        )
    }
}

export default MainImage
