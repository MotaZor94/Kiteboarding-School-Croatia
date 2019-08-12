import React, { Component } from 'react'
import PropTypes from 'prop-types'

import KiteImage from '../../../images/icons/kitesurf.svg'

export default class RentalCard extends Component {
    constructor(props) {
        super(props)
    }

    setColor(level) {
        switch (level.index) {
            case 0:
                return { backgroundColor:"#45ebcb" }

            case 1:
                return { backgroundColor:"#EB5245" }

            case 2:
                return { backgroundColor:"#EBE545" }
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