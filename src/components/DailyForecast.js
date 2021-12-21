import { format, isToday, toDate } from 'date-fns';
import { hi } from 'date-fns/locale';
import Storage from '../Storage';

const singleDayForecast = (day) => {
  const { metric } = Storage.getSettings();
  const tempMax = Math.round(metric ? day.temp.max : day.temp.max * 1.8 + 32);
  const tempMin = Math.round(metric ? day.temp.min : day.temp.min * 1.8 + 32);

  const forecast = document.createElement('div');
  forecast.classList.add('align-center', 'single-day-wrapper');

  const dayName = document.createElement('div');
  dayName.textContent = format(toDate(day.dt * 1000), 'eeee');
  forecast.appendChild(dayName);

  const weatherIcon = new Image();
  weatherIcon.classList.add('hourly-icon');
  weatherIcon.src = `http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`;
  forecast.appendChild(weatherIcon);

  const precipitationChance = document.createElement('div');
  precipitationChance.classList.add('bold', 'ht-1');
  precipitationChance.textContent = day.pop === 0 ? '' : `${Math.round(day.pop * 100)}%`;
  forecast.appendChild(precipitationChance);

  const hiLoWrapper = document.createElement('div');
  hiLoWrapper.classList.add('flex', 'wrapper', 'temps');
  const highTemp = document.createElement('p');
  highTemp.textContent = `H: ${tempMax}°`;
  const lowTemp = document.createElement('p');
  lowTemp.textContent = `L: ${tempMin}°`;
  hiLoWrapper.appendChild(highTemp);
  hiLoWrapper.appendChild(lowTemp);
  forecast.appendChild(hiLoWrapper);

  return forecast;
};

const dailyForecastHeaders = () => {
  const headers = document.createElement('div');
  return headers;
};

const DailyForecast = (daily) => {
  const forecast = document.createElement('div');
  forecast.classList.add('flex', 'col', 'daily-container');
  forecast.appendChild(dailyForecastHeaders());

  daily.forEach((day) => {
    if (!isToday(toDate(day.dt * 1000))) {
      const singleDay = singleDayForecast(day);
      forecast.appendChild(singleDay);
    }
  });

  return forecast;
};

export default DailyForecast;
