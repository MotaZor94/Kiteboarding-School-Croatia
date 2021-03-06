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
            level: {
              label: 'Beginner',
              index: 0
            },
            price:"110",
        },
        {
            heading1: '6 Hours Water Rental',
            heading2: '4 Liner Kite',
            desc: "kite control, upwind and downwind bodydrag, first time on the board, self rescue",
            duration: "(2-3 days, 2-3 hours each)",
            level: {
              label: 'Advanced',
              index: 2
            },
            price: '340',
        },
        {
            heading1: '6 Hours Water 2 Rental',
            heading2: 'Advanced 4 Liner Kite Skills',
            desc: 'how to upwind, do transitions, first pop',
            duration: '(2-3 days, 2-3 hours each)',
            level: {
              label: 'Advanced',
              index: 2
            },
            price: '395',
        },
        {
            heading1: '8 Hours Land and Water Rental',
            heading2: null,
            desc: 'from beginner to intermediate level kiteboarding skills',
            duration: '(2-4 days, 2-3 hours each)',
            level: {
              label: 'Intermediate',
              index: 1
            },
            price: '450',
        },
        {
            heading1: '12 Hours ALL IN Rental',
            heading2: null,
            desc: 'from beginner to advanced riding how to upwind, do transitions, first pop',
            duration: '(for a whole week of fun time)',
            level: {
              label: 'Advanced',
              index: 1
            },
            price: '595',
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

  generateRentalCards(data, difficultyFilter) {
    console.log('RENDERING NEW CARDS')
    return data.map(x => {
      if (difficultyFilter && difficultyFilter !== x.level.index) return null
      return (
        <RentalCard 
          className="rentalCard"
          heading1={x.heading1}
          heading2={x.heading2}
          desc={x.desc}
          duration={x.duration}
          level={x.level}
          price={x.price}
          booknow="BOOK NOW"
        />
      )
    })
  }

  render() {
    let opened = null
    if (location.pathname === '/rental') {
      opened = 'opened'
    }

    const { 
      selectedDifficulty,
      cardsContent
    } = this.state
    console.log(selectedDifficulty)
    return (
      <div className={`rentalSection ${opened}`}>
        <div className="RentalTitle">
          <h3>RENTALS WITH ASSISTANCE AND TUTORIAL ON HOW TO KITE</h3>
        </div>
          <RentalCategorySelector setDifficulty={this.setSelectedDifficutly} selected={selectedDifficulty}/>
          {this.generateRentalCards(cardsContent , selectedDifficulty)}
    </div>
    )
  }
}

