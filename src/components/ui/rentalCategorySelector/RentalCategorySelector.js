import React from 'react'
import baby from '../../../images/difficultyIcons/baby.png'
import skull from '../../../images/difficultyIcons/skull.png'
import strong from '../../../images/difficultyIcons/strong.png'
import babybw from '../../../images/difficultyIcons/baby-bw.png'
import skullbw from '../../../images/difficultyIcons/skull-bw.png'
import strongbw from '../../../images/difficultyIcons/strong-bw.png'


export default function RentalCategorySelector() {
    return (
        <div className="rentalDifficultySelectorWrap">
            <div className="difficultySection"><img alt="icon" src={babybw}></img></div>
            <div className="difficultySection"><img alt="icon" src={strong}></img></div>
            <div className="difficultySection"><img alt="icon" src={skullbw}></img></div>
        </div>
    )
}
