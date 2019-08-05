import React, { Component } from 'react'
import PropTypes from 'prop-types'

import KiteImage from '../../../images/icons/kitesurf.svg'

export default class RentalCard extends Component {
    constructor(props) {
        super(props)
    }

    setColor(level) {
        switch (level) {
            case 'Beginner':
                return { backgroundColor:"#45ebcb" }

            case 'Advanced':
                return { backgroundColor:"#EB5245" }

            case 'Intermediate':
                return { backgroundColor:"#EBE545" }

            case 'Beginner/Intermediate':
                return { backgroundImage: 'linear-gradient(to right, #45ebcb, #EBE545)'}
                

            case 'Beginner/Advanced':
                return { backgroundImage: 'linear-gradient(to right, #45ebcb, #EB5245)'}
        }
    }

    render() {
        const {
            heading1,
            heading2,
            level,
            price,
            booknow
        } = this.props
        let color = "";
        if(level === "Beginner") {
            color = "#45ebcb";
        } else if (level === "Advanced") {
            color = "#EBE545";
        } else if (level === "Intermediate"){
            color = "#EB5245";
        }



        return (
            <div className="RentalCard">
                <div className="heading1">{heading1}</div>
                <div className="heading2">{heading2}</div>
                <div className="level" style={this.setColor(level)}>{level}</div>
                <div className="price">{price}</div>
                <a href={`mailto:ivan@magas.com?Subject=${heading1} ${heading2} rental`} target="_top"><button className="button">{booknow}</button></a>
            </div>
        )
    } 
}