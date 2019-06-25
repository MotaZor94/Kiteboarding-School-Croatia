import React, { Component } from 'react'
import Sunny from '../../images/sunny.png'

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
