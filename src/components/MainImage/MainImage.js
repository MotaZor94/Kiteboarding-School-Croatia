import React, { Component } from 'react'
import Sunny from '../../images/sunny.png'

import BlueBackground from '../../images/mainImage/bluebackground.svg'


class MainImage extends Component {
    render() {
        return (
            <>
              <img className="hero" alt="sunny" src={Sunny}></img> 
            </>
        )
    }
}

export default MainImage
