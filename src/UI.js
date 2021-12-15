import Data from './Data';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import Storage from './Storage';

export default class UI {
  static createHeader() {
    const header = document.createElement('header');
    header.classList.add('flex');

    const searchBar = document.createElement('div');

    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');

    const btnSubmit = document.createElement('button');
    btnSubmit.textContent = 'Search';

    const btnUnits = document.createElement('button');
    btnUnits.textContent = 'Units';

    searchBar.appendChild(searchInput);
    searchBar.appendChild(btnSubmit);

    header.appendChild(searchBar);
    header.appendChild(btnUnits);

    btnSubmit.addEventListener('click', async () => {
      Storage.setLocation(searchInput.value);
      await UI.render();
    });

    btnUnits.addEventListener('click', async () => {
      Storage.setMetric();
      await UI.render();
    });

    return header;
  }

  static async createBody() {
    const { location } = Storage.getSettings();
    const weather = await Data.fetchWeather(location);
    console.log(weather);
    const content = document.createElement('div');
    const curWeather = CurrentWeather(weather.current);
    const hourlyForecast = HourlyForecast(weather.forecast.hourly);
    content.appendChild(curWeather);
    content.appendChild(hourlyForecast);
    return content;
  }

  static async render() {
    const content = await UI.createBody().catch(alert);
    document.body.innerHTML = '';
    document.body.appendChild(UI.createHeader());
    document.body.appendChild(content);
  }
}
