export default class Settings {
  constructor() {
    this.location = 'Stavanger';
    this.metric = true;
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

  setMetric() {
    this.metric = !this.metric;
  }
}
