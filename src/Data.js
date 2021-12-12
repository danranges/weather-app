const API_KEY = '0c871be1d393945eadd0ed45501fd080';

export default class Data {
  static async fetchCurWeather(location) {
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
  }

  static async fetchForecast(lat, lon) {
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
  }

  static async fetchWeather(location) {
    try {
      const current = await Data.fetchCurWeather(location);
      const { coord } = current;
      const forecast = await Data.fetchForecast(coord.lat, coord.lon);
      const weather = { current, forecast };
      return weather;
    } catch (error) {
      throw new Error(error);
    }
  }
}
