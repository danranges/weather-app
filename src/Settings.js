export default class Settings {
  constructor() {
    this.location = 'Stavanger';
    this.units = 'metric';
  }

  getLocation() {
    return this.location;
  }

  setLocation(newLocation) {
    this.location = newLocation;
  }

  getUnits() {
    return this.units;
  }

  setUnits(newUnits) {
    this.units = newUnits;
  }
}
