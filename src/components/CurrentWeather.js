import Storage from '../Storage';

const CurrentWeather = (weather) => {
  const { metric } = Storage.getSettings();

  const tempCurrent = Math.round(metric ? weather.main.temp : weather.main.temp * 1.8 + 32);
  const tempMax = Math.round(metric ? weather.main.temp_max : weather.main.temp_max * 1.8 + 32);
  const tempMin = Math.round(metric ? weather.main.temp_min : weather.main.temp_min * 1.8 + 32);

  const currentWeather = document.createElement('div');
  currentWeather.classList.add('flex', 'col', 'wrapper', 'align-center');

  const location = document.createElement('h1');
  location.textContent = weather.name;

  const temperature = document.createElement('p');
  temperature.classList.add('current-temp');
  temperature.textContent = `${tempCurrent}°`;

  const condition = document.createElement('p');
  condition.classList.add('condition');
  condition.textContent = weather.weather[0].description;

  const hiLoWrapper = document.createElement('div');
  hiLoWrapper.classList.add('flex', 'wrapper', 'temps');
  const highTemp = document.createElement('p');
  highTemp.textContent = `H: ${tempMax}°`;
  const lowTemp = document.createElement('p');
  lowTemp.textContent = `L: ${tempMin}°`;
  hiLoWrapper.appendChild(highTemp);
  hiLoWrapper.appendChild(lowTemp);

  currentWeather.appendChild(location);
  currentWeather.appendChild(temperature);
  currentWeather.appendChild(condition);
  currentWeather.appendChild(hiLoWrapper);

  return currentWeather;
};

export default CurrentWeather;
