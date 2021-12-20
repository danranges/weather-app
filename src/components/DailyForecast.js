import { format, isToday, toDate } from 'date-fns';

const singleDayForecast = (day) => {
  const forecast = document.createElement('div');
  forecast.classList.add('flex', 'row');

  const dayName = document.createElement('p');
  dayName.textContent = format(toDate(day.dt * 1000), 'eeee');
  forecast.appendChild(dayName);
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
