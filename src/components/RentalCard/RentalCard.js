import React, { Component } from 'react'
import PropTypes from 'prop-types'

import KiteImage from '../../images/icons/kitesurf.svg'

export default class RentalCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            heading1,
            heading2,
            level,
            price,
            booknow
        } = this.props
        return (
            <div className="RentalCard">
                <h3 className="heading1">{heading1}</h3>
                <h3 className="heading2">{heading2}</h3>
                <h4 className="level">{level}</h4>
                <h5 className="price">{price}</h5>
                <KiteImage className="CardImage" />
                <button className="button">{booknow}</button>
            </div>
        )
    }
}