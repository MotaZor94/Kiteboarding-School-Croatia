import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MainImage from '../MainImage/MainImage'
import weatherLogic from '../pages/weather/weatherForecastLogic'

class HeroSection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: null
        }
    }
    async componentDidMount() {
        let data = await weatherLogic.updateWeather()
        let info = weatherLogic.getWeatherStatus(data.currently)
        this.setState({ info })
    }
    render() {
        const { location: { pathname } } = this.props
        const { info } = this.state
        return (
            <>
            {info && 
                <div className={`hero-section ${info}`} >
                {(pathname === '/weather' || pathname === '/') 
                ? <MainImage /> 
                : null
                }
            </div>}
            </>
        )
    }
}
export default HeroSection