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
    console.log(data);
  } catch (error) {
    throw new Error(error);
  }
};

fetchCurWeather('stavanger');
fetchForecast(33.44, -94.04);
