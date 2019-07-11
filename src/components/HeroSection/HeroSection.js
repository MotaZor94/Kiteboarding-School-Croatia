import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MainImage from '../MainImage/MainImage'
import weatherLogic from '../pages/weather/weatherForecastLogic'
import RentalImage from '../../images/Kitesurfing1.png'

class HeroSection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: null
        }
    }
    async componentDidMount() {
        let data = await weatherLogic.updateWeather()
        // console.log('data came:', data)
        let info = weatherLogic.getWeatherStatus(data.currently, data.daily)
        this.setState({ info })
    }

    render() {
        const { location: { pathname } } = this.props
        const { info } = this.state
        console.log('info:', info)
        return (
            <>
            {info && 
                <div className={`hero-section ${info}`} > 
                {(pathname === '/weather' || pathname === '/') 
                ? <MainImage pathname={pathname}/> 
                : null
                }
                {pathname === '/rental'
                ? <>
                    <img className="rentalimage" src={RentalImage}></img>
                </>
                : null
                }

            </div>}
            </>
        )
    }
}
export default HeroSection