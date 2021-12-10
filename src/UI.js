import Data from './Data';

export default class UI {
  static renderSearch() {
    const searchBar = document.createElement('header');

    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');

    const btnSubmit = document.createElement('button');
    btnSubmit.textContent = 'Search';

    document.body.appendChild(searchBar);
    searchBar.appendChild(searchInput);
    searchBar.appendChild(btnSubmit);

    btnSubmit.addEventListener('click', async () => {
      console.log(await Data.fetchWeather(searchInput.value));
    });
  }
}
