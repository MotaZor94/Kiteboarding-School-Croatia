import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => (
  <div>
    <Link to="/weather">
      <button type="submit">weather</button>
    </Link>
    <Link to="/home">
      <button type="submit">home</button>
    </Link>
    <Link to="/rental">
      <button type="submit">rental</button>
    </Link>
  </div>
);

export default AppBar;
