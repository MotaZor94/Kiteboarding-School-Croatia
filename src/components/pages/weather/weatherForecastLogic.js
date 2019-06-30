import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetchRequest from '../../fetch/fetchRequest'

class WeatherForecastLogic{        
    constructor(name) {
        this.name = name
        this.data
    }

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
