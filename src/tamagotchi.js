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
  butDidYouDie() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  feed() {
    this.foodLevel = 100;
  }
};