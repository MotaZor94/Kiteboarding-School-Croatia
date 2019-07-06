import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

import Main from './components/pages/main/main'
import Weather from './components/pages/weather/weather'
import Rental from './components/pages/rental/rental'
import AppBar from './components/AppBar/AppBar'
import MainImage from './components/MainImage/MainImage'
import HeroSection from './components/HeroSection/HeroSection'
import weatherLogic from './components/pages/weather/weatherForecastLogic'
import './index.css'

import MainIllustration from './components/MainIllustration/MainIllustration'

const App = () => {
  // window.addEventListener('scroll', () => console.log('scrolll: ', document.pageXOffset));

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

          <Route key="mainComp" style={{ paddingBottom: '0' }} exact path="/" render={({ location }) => <Main location={location}/>} />

          <Route path="/rental" render={({ location }) => <Rental location={location}/>} />

        </SwipeableRoutes>
      </div>
    </Router>
  )
};




ReactDOM.render(<App />, document.querySelector("#root"));