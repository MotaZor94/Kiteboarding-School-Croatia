import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetchRequest from '../../fetch/fetchRequest'

class WeatherForecastLogic{        
        // const data = await fetchRequest('/darksky');
        // this.setState({ data, loaded: true });
    constructor(name) {
        this.name = name
        this.data
    }

    // async componentDidMount() {
    //     console.log('weather logic mount')
        
    //   }

    // getCurrentTemp() {
    //     return this.state.getCurrentTemp
    // }

    // getCurrentWindSpeed() {
    //     return this.state.currentWindSPeed
    // }
    // weather = {
    //     data: {}
    // }

    async updateWeather() {
        try {
            const data = await fetchRequest('/darksky');
            // console.log('DATA CAME: ', data)
            return data
        } catch (error) {
            console.log(error);
        }
    }
}

const weather = new WeatherForecastLogic(weather)

export default weather
