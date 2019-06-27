import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MainBeach from '../../images/mainIllustration/main.png'

export default class MainIllustration extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <div>
                <img className="hero" alt="sunny" src={MainBeach}></img>
            </div>
        )
    }
}
