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
<<<<<<< HEAD
    // const { data } = this.state;
    // const result = data.current.temperature;
=======
    const { data } = this.state;
>>>>>>> testbranch
  }


  // componentDidUpdate(prevProps, prevState) {
  //     if (prevState.data !== this.state.data) {

  //     }
  // }

  render() {
    const { data, loaded } = this.state;
  
    return (
      <div className="weather-wrap">
<<<<<<< HEAD
        {/* <WeatherDataPanel temperature={24} pressure={54} humidity={80} windSpeed={9} weatherState='SUNNY'/> */}
=======
        {/* <WeatherDataPanel
          temperature={24}
          pressure={54}
          humidity={80}
          wind={9}
          weatherState={'SUNNY'}
        />
        <h1 style={{ margin: '0' }}>weather</h1>
        <h3>
temp:
          {' '}
          {loaded && data.currently.temperature}
        </h3> */}
>>>>>>> testbranch
      </div>
    );
  }
}

export default Weather;
