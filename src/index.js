import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

import Main from './components/pages/main/main'
import Weather from './components/pages/weather/weather'
import Rental from './components/pages/rental/rental'
import AppBar from './components/AppBar/AppBar'
import MainImage from './components/MainImage/MainImage'
import './index.css'

const App = () => {
  return (
    <Router>
      <Route key="appBarComp" path="/" component={AppBar} />
       
      <SwipeableRoutes className="main-wrap-horizontal">
        
         <Route key="weatherComp" path="/weather" component={Weather} />
         {/* <Route key="weatherMainImage" path="/weather" component={MainImage} /> */}
         <Route key="mainComp" exact path="/" component={Main} />
         {/* <Route key="mainMainImage" path="/home" component={MainImage} /> */}
         <Route path="/rental" component={Rental} />
        
      </SwipeableRoutes>
    </Router>
  )
};




ReactDOM.render(<App />, document.querySelector("#root"));