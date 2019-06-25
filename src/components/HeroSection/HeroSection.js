import React, { Component } from 'react'
import MainImage from '../MainImage/MainImage'

class HeroSection extends Component {
    render() {
        return (
            <div  className="hero-section">
                <MainImage />
                <div className="heading">
                <h1 className="kiteboarding">Kiteboarding</h1>
                <h1>equipment</h1>
                <h1>rentals</h1>
                <p>Push your kiteboarding skills with 
                our astonishing equipment</p>
                </div>
            </div>
        )
    }
}
export default HeroSection