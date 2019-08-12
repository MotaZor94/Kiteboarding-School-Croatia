import React from 'react'
import baby from '../../../images/difficultyIcons/baby.png'
import skull from '../../../images/difficultyIcons/skull.png'
import strong from '../../../images/difficultyIcons/strong.png'
import babybw from '../../../images/difficultyIcons/baby-bw.png'
import skullbw from '../../../images/difficultyIcons/skull-bw.png'
import strongbw from '../../../images/difficultyIcons/strong-bw.png'


export default function RentalCategorySelector({ selected, setDifficulty }) {
    return (
        <div className="rentalDifficultySelectorWrap">
            <div 
              className="difficultySection"
              onClick={() => setDifficulty(0)}
            >
                <img alt="icon" src={selected == 0 ? baby : babybw}></img>
            </div>
            <div 
              className="difficultySection"
              onClick={() => setDifficulty(1)}
            >
                <img alt="icon" src={selected == 1 ? strong : strongbw}></img>
            </div>
            <div 
              className="difficultySection"
              onClick={() => setDifficulty(2)}
            >
                <img alt="icon" src={selected == 2 ? skull : skullbw}></img>
            </div>
        </div>
    )
}
