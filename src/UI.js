import Data from './Data';
import CurrentWeather from './components/CurrentWeather';
import Storage from './Storage';

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
      Storage.setLocation(searchInput.value);
      await UI.render();
    });

    return searchBar;
  }

  static async createBody() {
    const { location } = Storage.getSettings();
    const weather = await Data.fetchWeather(location);
    const content = document.createElement('div');
    const curWeather = CurrentWeather(weather.current);
    content.appendChild(curWeather);
    return content;
  }

  static async render() {
    const content = await UI.createBody().catch(alert);
    document.body.innerHTML = '';
    document.body.appendChild(UI.createHeader());
    document.body.appendChild(content);
  }
}
