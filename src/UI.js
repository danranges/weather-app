import Data from './Data';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import Storage from './Storage';

export default class UI {
  static createHeader() {
    const { metric } = Storage.getSettings();

    const header = document.createElement('header');
    header.classList.add('flex');

    const searchBar = document.createElement('div');

    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');

    const btnSubmit = document.createElement('button');
    btnSubmit.textContent = 'Search';

    const btnUnits = document.createElement('button');
    btnUnits.textContent = metric ? 'C°' : 'F°';

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
    const content = document.createElement('section');
    const above = document.createElement('div');
    content.classList.add('flex', 'col', 'content', 'align-center');
    above.classList.add('flex', 'content', 'above');
    const curWeather = CurrentWeather(weather.current);
    const hourlyForecast = HourlyForecast(weather.forecast.hourly);
    above.appendChild(curWeather);
    above.appendChild(hourlyForecast);
    content.appendChild(above);
    return content;
  }

  static async render() {
    document.body.innerHTML = '';
    document.body.appendChild(UI.createHeader());
    document.body.appendChild(await UI.createBody().catch(alert));
  }
}
