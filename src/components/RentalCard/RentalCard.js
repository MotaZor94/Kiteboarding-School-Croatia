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
                <h3 className="heading1">{heading1}</h3>
                <h3 className="heading2">{heading2}</h3>
                <h4 className="level" style={{backgroundColor:`${color}`}}>{level}</h4>
                <h5 className="price">{price}</h5>
                <KiteImage className="CardImage" />
                <a href={`mailto:ivan@magas.com?Subject=${heading1} ${heading2} rental`} target="_top"><button className="button">{booknow}</button></a>
            </div>
        )
    }
}