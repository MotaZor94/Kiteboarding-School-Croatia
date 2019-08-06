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
            desc,
            duration,
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


        // <a href={`mailto:ivan@magas.com?Subject=${heading1} ${heading2} rental`} target="_top"><button className="button">{booknow}</button></a>

        return (
            <div className="rentalCard">
                <div className="upperRental">

                    <div className="leftUpperRental">
                        <div className="leftUpperUpperRental">
                            <span className="titleRentalCard">{heading1}</span>
                            <span className="typeRentalCard">{heading2}</span>
                        </div>
                        <div className="leftUpperLowerRental">
                            <span className="durationRentalCard">{duration}</span>
                        </div>
                    </div>
                    <div className="rightUpperRental">
                        <span className="priceRentalCard">{`€${price}`}</span>
                    </div>

                </div>
                <div className="lowerRental">
                    <span className="descriptionRentalCard">{desc}</span>
                </div>
            </div>
        )
    } 
}