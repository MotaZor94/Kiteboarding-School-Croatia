import React from 'react';

import fetchRequest from '../../fetch/fetchRequest';

import WeatherDataPanel from '../weather/WeatherDataPanel'

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'data being loaded',
      loaded: false,
    };
  }

  async componentDidMount() {
    try {
      const data = await fetchRequest('/darksky');
      this.setState({ data, loaded: true });
    } catch (error) {
      console.log(error);
    }
  }

  prepareWeatherCard() {
    // const { data } = this.state;
    // const result = data.current.temperature;
  }


  // componentDidUpdate(prevProps, prevState) {
  //     if (prevState.data !== this.state.data) {

  //     }
  // }

  render() {
    return (
      <div className="weatherSection">
        <h1>Weather Section</h1>
      </div>
    );
  }
}

export default Weather;
