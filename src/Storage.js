import Settings from './Settings';

export default class Storage {
  static initSettings() {
    if (!localStorage.getItem('weatherSettings')) {
      localStorage.setItem('weatherSettings', JSON.stringify(new Settings()));
    }
  }

  static getSettings() {
    const settings = Object.assign(
      new Settings(),
      JSON.parse(localStorage.getItem('weatherSettings')),
    );

    return settings;
  }

  static setSettings(settings) {
    localStorage.setItem('weatherSettings', JSON.stringify(settings));
  }

  static setLocation(location) {
    const settings = Storage.getSettings();
    settings.setLocation(location);
    Storage.setSettings(settings);
  }

  static setMetric() {
    const settings = Storage.getSettings();
    settings.setMetric();
    Storage.setSettings(settings);
  }
}
