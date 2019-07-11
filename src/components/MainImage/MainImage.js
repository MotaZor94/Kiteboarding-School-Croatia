import React, { Component } from 'react'
import Beach from '../../images/mainIllustration/main.png'
import Cloud from '../../images/mainIllustration/cloud.png'
import Sun from '../../images/mainIllustration/sun.png'
import Moon from '../../images/mainIllustration/moon.png'
import Goodcondition from '../../images/goodcondition.png'
import Badcondition from '../../images/badcondition.png'

import WeatherForecast from '../pages/weather/weatherForecastLogic'

import BlueBackground from '../../images/mainImage/bluebackground.svg'
import weather from '../pages/weather/weatherForecastLogic';

class MainImage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: '',
            windSpeed: null,
            cloudiness: null,
            generalState: null,
            time: 0
        }

        this.prepareClouds = this.prepareClouds.bind(this)
        this.moonOrSun = this.moonOrSun.bind(this)
        this.darkness = this.darkness.bind(this)
    }

    async componentDidMount() {
        const result = await weather.updateWeather()
        const time = new Date().getHours()
        this.setState({
            ...this.state,
            data: result,
            cloudiness: Math.floor((result.currently.cloudCover * 10) / 2),
            time,
            windSpeed: result.currently.windSpeed
        })
    }

    prepareClouds() {
        const { cloudiness } = this.state
        const { pathname } = this.props
        const style = pathname === '/weather' ? { top:'7em' } : null
        var clouds = []
        for (let i = 1; i <= cloudiness; i++) {
            clouds.push(<img key={`cloud${i}`} className={`cloud${i}`} alt="cloud" src={Cloud} style={style}></img>)
        }
        return clouds
    }

    moonOrSun() {
        const { time, cloudiness } = this.state
        const { pathname } = this.props
        const style = pathname === '/weather' ? { top:'6em' } : null

        console.log('moon or sun')
        if (time >= 8 && time < 20 && cloudiness < 4) {
            console.log('sun')
            return <img style={style} className="moonOrSun" alt="sunny" src={Sun}></img>
        } else if (time < 8 || time >= 20 && cloudiness < 4) {
            console.log('moon')
            return <img  style={style} className="moonOrSun" alt="sunny" src={Moon}></img>
        } else {
            console.log('nada')
            return null
        }
    }

    darkness() {
        console.log('DARKNESS')
        const { time, cloudiness } = this.state
        var value = 100
        if (time >= 8 && time < 20) {
            switch (true) {
                case (cloudiness > 4):
                    console.log('cloudiness gihhern than 4')
                    value = 90
                    break;

                case (cloudiness > 3):
                    console.log('cloudiness gihhern than 3')
                    value = 93
                    break;

                case (cloudiness > 2):
                    console.log('cloudiness gihhern than 2')
                    value = 95
                    break;

                case (cloudiness > 1):
                    console.log('cloudiness gihhern than 1')
                    value = 97
                    break;

                default:
                    console.log('no darkness')
                    value = 100
                    break;
            }
        } else if (time >= 20 || time < 8) {
            value = 80
        }

        return `brightness(${value}%)`
    }

    render() {
        
        const {pathname} = this.props
        const {windSpeed} = this.state
        return (
            <div className="weather-graphic" style={{ filter: this.darkness() }}>
                {(pathname === '/weather') 
                ? <div className="kiteboarding-conditions"><h1>Kiteboarding conditions</h1><img src={windSpeed > 9? Goodcondition : Badcondition}></img></div> 
                : null
                }
                {this.moonOrSun()}
                {this.prepareClouds()}
                <img className="hero" alt="sunny" src={Beach}></img> 
            </div>
        )
    }
}

export default MainImage
