import Storage from '../Storage';

const singleHourForecast = (hour) => {
  const forecast = document.createElement('div');

  return forecast;
};

const HourlyForecast = (hourly) => {
  const forecast = document.createElement('div');

  for (let i = 0; i < 24; i += 1) {
    const hour = singleHourForecast(hourly[i]);
    forecast.appendChild(hour);
  }

  return forecast;
};

export default HourlyForecast;
