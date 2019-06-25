import React, { Component } from 'react'
import Sunny from '../../images/sunny.png'

<<<<<<< HEAD
import BlueBackground from '../../images/mainImage/bluebackground.svg'

export class MainImage extends Component {
    render(props) {
        return (
            <div>
                <BlueBackground />
            </div>
=======
class MainImage extends Component {
    render() {
        return (
            <>
              <img className="hero" alt="sunny" src={Sunny}></img> 
            </>
>>>>>>> testbranch
        )
    }
}

export default MainImage
