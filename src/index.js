import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

import Main from './components/pages/main/main'
import Weather from './components/pages/weather/Weather'
import Rental from './components/pages/rental/rental'
import AppBar from './components/AppBar/AppBar'
import HeroSection from './components/HeroSection/HeroSection'
import './index.css'

const App = () => {
  return (
    <Router>
      <Route key="appBarComp" path="/" component={AppBar} />
      <div className="test">
        <Route 
          key="mainImageMain"
          path="/"
          render={({location}) => <HeroSection location={location}/>}
        />

        <SwipeableRoutes className="main-wrap-horizontal">

          <Route key="weatherComp" exact path="/weather" render={({ location }) => <Weather location={location}/>} />

          <Route key="mainComp" exact path="/" render={({ location }) => <Main location={location}/>} />

          <Route key="rentalComp" path="/rental" render={({ location }) => <Rental location={location}/>} />

        </SwipeableRoutes>
      </div>
    </Router>
  )
};




ReactDOM.render(<App />, document.querySelector("#root"));