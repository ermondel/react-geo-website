import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';
import { forecastsDelete } from '../actions/weather';

const WeatherItem = ({ forecast, view, forecastsDelete }) => {
  const colors = {
    temp: { line: '#ADD8E6', bar: '#ADD8E6' },
    pres: { line: '#BDB76B', bar: '#BDB76B' },
    humd: { line: '#FFDAB9', bar: '#FFDAB9' },
  };

  const temperatureList = [];
  const pressureList = [];
  const humidityList = [];

  forecast.list.forEach((weather) => {
    temperatureList.push(weather.main.temp);
    pressureList.push(weather.main.pressure);
    humidityList.push(weather.main.humidity);
  });

  return (
    <div className='forecast'>
      <div className='forecast__header'>
        <h3 className='forecast__title'>{forecast.city.name}</h3>
        <div className='forecast__btns'>
          <button
            className='forecast__btn-delete'
            onClick={() => forecastsDelete(forecast.city.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className='forecast__body'>
        <div className='forecast__temperature-chart'>
          <Sparklines data={temperatureList}>
            {view === 'bars' ? (
              <SparklinesBars style={{ fill: colors.temp.bar }} />
            ) : (
              <SparklinesLine color={colors.temp.line} />
            )}
          </Sparklines>
          <p className='forecast__legend'>temperature</p>
        </div>

        <div className='forecast__pressure-chart'>
          <Sparklines data={pressureList}>
            {view === 'bars' ? (
              <SparklinesBars style={{ fill: colors.pres.bar }} />
            ) : (
              <SparklinesLine color={colors.pres.line} />
            )}
          </Sparklines>
          <p className='forecast__legend'>pressure</p>
        </div>

        <div className='forecast__humidity-chart'>
          <Sparklines data={humidityList}>
            {view === 'bars' ? (
              <SparklinesBars style={{ fill: colors.humd.bar }} />
            ) : (
              <SparklinesLine color={colors.humd.line} />
            )}
          </Sparklines>
          <p className='forecast__legend'>humidity</p>
        </div>
      </div>
    </div>
  );
};

export default connect(undefined, { forecastsDelete })(WeatherItem);
