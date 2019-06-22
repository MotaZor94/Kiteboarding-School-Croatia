import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

import Main from './components/pages/main/main'
import Weather from './components/pages/weather/weather'
import Rental from './components/pages/rental/rental'
import AppBar from './components/AppBar/AppBar'
import './index.css'
const App = () => {
  return (
    <Router>
      <AppBar />
       
      <SwipeableRoutes className="main-wrap-horizontal">
        
         <Route path="/weather" component={Weather} />
         <Route path="/home" component={Main} />
         <Route path="/rental" component={Rental} />
        
      </SwipeableRoutes>
    </Router>
  )
};




ReactDOM.render(<App />, document.querySelector("#root"));