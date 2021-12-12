import Data from './Data';
import CurrentWeather from './components/CurrentWeather';

export default class UI {
  static renderSearch() {
    const searchBar = document.createElement('header');

    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');

    const btnSubmit = document.createElement('button');
    btnSubmit.textContent = 'Search';

    searchBar.appendChild(searchInput);
    searchBar.appendChild(btnSubmit);

    btnSubmit.addEventListener('click', async () => {
      await Data.fetchWeather(searchInput.value);
    });

    return searchBar;
  }

  static async render(location = 'stavanger') {
    const weather = await Data.fetchWeather(location);
    console.log(weather);

    document.body.appendChild(UI.renderSearch());
    document.body.appendChild(CurrentWeather(weather));
  }
}
