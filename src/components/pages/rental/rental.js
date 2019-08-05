import React, { Component } from 'react'
import RentalCard from '../../ui/RentalCard/RentalCard'
import RentalCategorySelector from '../../ui/rentalCategorySelector/RentalCategorySelector'

export default class rental extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedDifficulty: null,
      cardsContent: [
        {
            heading1:"Land Rental",
            heading2:"Trainer Kite",
            level:"Beginner",
            price:"110 Euro",
        },
        {
            heading1: 'Rental',
            heading2: 'Liner Kite',
            level: 'Advanced',
            price: '340 Euro',
        },
        {
            heading1: 'Rental',
            heading2: 'Liner Kite',
            level: 'Advanced',
            price: '395 Euro',
        },
        {
            heading1: 'Rental',
            heading2: 'Land and Water',
            level: 'Beginner/Intermediate',
            price: '450 Euro',
        },
        {
            heading1: 'ALL IN Rental',
            heading2: 'BEST DEAL!',
            level: 'Beginner/Advanced',
            price: '595 Euro',
        },
      ]
    }

    this.generateRentalCards = this.generateRentalCards.bind(this)
  }

  generateRentalCards(data = this.state.cardsContent) {
    return data.map(x => (
      <RentalCard 
        className="rentalCard"
        heading1={x.heading1}
        heading2={x.heading2}
        level={x.level}
        price={x.price}
        booknow="BOOK NOW"
      />
    ))
  }

  render() {
    let opened = null
    if (location.pathname === '/rental') {
      opened = 'opened'
    }

    return (
      <div className={`rentalSection ${opened}`}>
        <div className="RentalTitle">
          <RentalCategorySelector />
          <h3>RENTALS WITH ASSISTANCE AND TUTORIAL ON HOW TO KITE</h3>
        </div>
          {this.generateRentalCards()}
    </div>
    )
  }
}

