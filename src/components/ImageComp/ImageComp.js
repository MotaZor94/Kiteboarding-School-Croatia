import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImageComp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            image,
            imageheading,
            imagedesc
        } = this.props
        return (
            <div className="ImageComp">
                <img className="ImageCompImg" src={image}></img>
                <div className="image-heading">{imageheading}</div>
                <p className="image-desc">{imagedesc}</p>
                
            </div>
        )
    }
}