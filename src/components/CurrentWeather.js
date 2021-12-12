const CurrentWeather = (weather) => {
  const tempCurrent = weather.current.main.temp;
  const tempMax = weather.current.main.temp_max;
  const tempMin = weather.current.main.temp_min;

  const currentWeather = document.createElement('div');
  const location = document.createElement('h1');
  location.textContent = weather.current.name;

  const temperature = document.createElement('p');
  temperature.classList.add('current-temp');
  temperature.textContent = `${tempCurrent}°`;

  const condition = document.createElement('p');
  condition.classList.add('condition');
  condition.textContent = weather.current.weather[0].description;

  const hiLoWrapper = document.createElement('div');
  hiLoWrapper.classList.add('flex');
  const highTemp = document.createElement('p');
  highTemp.textContent = `H:${tempMax}°`;
  const lowTemp = document.createElement('p');
  lowTemp.textContent = `L:${tempMin}°`;
  hiLoWrapper.appendChild(highTemp);
  hiLoWrapper.appendChild(lowTemp);

  currentWeather.appendChild(location);
  currentWeather.appendChild(temperature);
  currentWeather.appendChild(condition);
  currentWeather.appendChild(hiLoWrapper);

  return currentWeather;
};

export default CurrentWeather;
