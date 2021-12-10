import './style.css';

const API_KEY = '0c871be1d393945eadd0ed45501fd080';

const fetchCurWeather = async (location) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
      {
        mode: 'cors',
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchForecast = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${API_KEY}`,
      {
        mode: 'cors',
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchWeather = async (location) => {
  const current = await fetchCurWeather(location);

  const { coord } = current;

  const forecast = await fetchForecast(coord.lat, coord.lon);

  const weather = { current, forecast };

  return weather;
};

const renderSearch = () => {
  const searchBar = document.createElement('header');

  const searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'text');

  const btnSubmit = document.createElement('button');
  btnSubmit.textContent = 'Search';

  document.body.appendChild(searchBar);
  searchBar.appendChild(searchInput);
  searchBar.appendChild(btnSubmit);

  btnSubmit.addEventListener('click', () => {
    fetchWeather(searchInput.value);
  });
};

renderSearch();
