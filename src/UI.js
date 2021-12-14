import Data from './Data';
import CurrentWeather from './components/CurrentWeather';

export default class UI {
  static createHeader() {
    const searchBar = document.createElement('header');

    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');

    const btnSubmit = document.createElement('button');
    btnSubmit.textContent = 'Search';

    searchBar.appendChild(searchInput);
    searchBar.appendChild(btnSubmit);

    btnSubmit.addEventListener('click', async () => {
      await UI.render(searchInput.value);
    });

    return searchBar;
  }

  static async createBody(location = 'stavanger') {
    const weather = await Data.fetchWeather(location);
    const content = document.createElement('div');
    const curWeather = CurrentWeather(weather.current);
    content.appendChild(curWeather);
    return content;
  }

  static async render(location) {
    const content = await UI.createBody(location).catch(alert);
    document.body.innerHTML = '';
    document.body.appendChild(UI.createHeader());
    document.body.appendChild(content);
  }
}
