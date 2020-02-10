export class Tamagotchi {
  constructor(name, sleep, foodLevel) {
    this.name = name;
    this.sleepLevel = 10;
    this.foodLevel = 100;
  }
  setHunger() {
    setInterval(() => {
      if (this.foodLevel > 0) {
        this.foodLevel--;
      }
    }, 90000);
  }

  setSleep() {
    setInterval(() => {
      if (this.sleepLevel > 0) {
        this.sleepLevel--; 
        }
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

  butDidYouSleep() {
    if (this.sleepLevel === 0) {
      return (this.foodLevel / 2);
    }
  }
  sleep() {
    this.sleepLevel = 10;
  }
};