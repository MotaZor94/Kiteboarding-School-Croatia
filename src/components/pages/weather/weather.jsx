import React from 'react';

import fetchRequest from '../../fetch/fetchRequest';


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
      console.log('data: ', data);
      this.setState({ data, loaded: true });
    } catch (error) {
      console.log(error);
    }
  }

  prepareWeatherCard() {
    const { data } = this.state;
    const result = data.current.temperature;
  }


  // componentDidUpdate(prevProps, prevState) {
  //     if (prevState.data !== this.state.data) {

  //     }
  // }

  render() {
    const { data, loaded } = this.state;
    console.log('state: ', data);
    console.log(data && data.currently);
    return (
      <div className="weather">
        <h1 style={{ margin: '0' }}>weather</h1>
        <h3>
temp:
          {' '}
          {loaded && data.currently.temperature}
        </h3>
      </div>
    );
  }
}

export default Weather;
