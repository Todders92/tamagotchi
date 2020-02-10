export class Tamagotchi {
  constructor(name, sleep, foodLevel) {
    this.name = name;
    this.sleepLevel = 10;
    this.foodLevel = 100;
  }
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 90000);
  }

  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 1800000);
  }
  feed() {
    this.foodLevel = 100;
  }
};