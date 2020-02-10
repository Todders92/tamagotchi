export class Tamagotchi {
  constructor(name, sleep, foodLevel) {
    this.name = name;
    this.sleep = sleep;
    this.foodLevel = 100;
  }
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
};