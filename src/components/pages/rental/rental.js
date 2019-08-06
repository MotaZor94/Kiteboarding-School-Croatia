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
            heading1:"2 Hours Land Rental",
            heading2:"Trainer Kite",
            desc: "for absolute beginners in kite flying",
            level:"Beginner",
            price:"110 Euro",
        },
        {
            heading1: '6 Hours Water 1 Rental',
            heading2: '4 Liner Kite',
            desc: "setting up the equipment, kite control, upwind and downwind bodydrag, first time on the board, self rescue",
            duration: "(2-3 days, 2-3 hours each)",
            level: 'Advanced',
            price: '340 Euro',
        },
        {
            heading1: '6 Hours Water 2 Rental',
            heading2: 'Advanced 4 Liner Kite Skills',
            desc: 'how to upwind, do transitions, first pop',
            duration: '(2-3 days, 2-3 hours each)',
            level: 'Advanced',
            price: '395 Euro',
        },
        {
            heading1: '8 Hours Land and Water Rental',
            heading2: null,
            desc: 'from beginner to intermediate level kiteboarding skills',
            duration: '(2-4 days, 2-3 hours each)',
            level: 'Beginner/Intermediate',
            price: '450 Euro',
        },
        {
            heading1: '12 Hours ALL IN Rental',
            heading2: null,
            desc: 'from beginner to advanced riding how to upwind, do transitions, first pop',
            duration: '(for a whole week of fun time)',
            level: 'Beginner/Advanced',
            price: '595 Euro',
        },
      ]
    }

    this.generateRentalCards = this.generateRentalCards.bind(this)
    this.setSelectedDifficutly = this.setSelectedDifficutly.bind(this)
  }

  setSelectedDifficutly(index) {
    this.setState({
      ...this.state,
      selectedDifficulty: index
    })
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

    const { selectedDifficulty } = this.state

    return (
      <div className={`rentalSection ${opened}`}>
        <div className="RentalTitle">
          {/* <RentalCategorySelector setDifficulty={this.setSelectedDifficutly} selected={selectedDifficulty}/> */}
          <h3>RENTALS WITH ASSISTANCE AND TUTORIAL ON HOW TO KITE</h3>
        </div>
          {this.generateRentalCards()}
    </div>
    )
  }
}

