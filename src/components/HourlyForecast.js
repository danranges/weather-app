import { getHours, toDate } from 'date-fns';
import Storage from '../Storage';

const singleHourForecast = (hour, i) => {
  const forecast = document.createElement('div');
  forecast.classList.add('flex', 'col', 'align-center');

  const { metric } = Storage.getSettings();

  const time = document.createElement('p');
  time.classList.add('bold');
  time.textContent =
    i === 0
      ? 'Now'
      : getHours(toDate(hour.dt * 1000))
          .toString()
          .padStart(2, 0);

  const precipitationChance = document.createElement('p');
  precipitationChance.classList.add('bold', 'ht-1');
  precipitationChance.textContent = hour.pop === 0 ? '' : `${Math.round(hour.pop * 100)}%`;

  const weatherIcon = new Image();
  weatherIcon.classList.add('hourly-icon');
  weatherIcon.src = `http://openweathermap.org/img/wn/${hour.weather[0].icon}@4x.png`;

  const temp = document.createElement('p');
  temp.textContent = `${Math.round(metric ? hour.temp : hour.temp * 1.8 + 32)}°`;

  forecast.appendChild(time);
  forecast.appendChild(precipitationChance);
  forecast.appendChild(weatherIcon);
  forecast.appendChild(temp);
  return forecast;
};

const HourlyForecast = (hourly) => {
  const forecast = document.createElement('div');
  forecast.classList.add('flex', 'row', 'hourly-container');

  for (let i = 0; i <= 24; i += 1) {
    const hour = singleHourForecast(hourly[i], i);
    forecast.appendChild(hour);
  }

  return forecast;
};

export default HourlyForecast;
