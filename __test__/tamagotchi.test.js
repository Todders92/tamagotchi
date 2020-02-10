import { Tamagotchi } from '../src/tamagotchi'
import { JestEnvironment } from '@jest/environment';
import { exportAllDeclaration } from '@babel/types';

describe('Kenny', () => {
  jest.useFakeTimers();
  let kenny;

  beforeEach(function() {
    kenny = new Tamagotchi("Kenny", 10, 100);
    kenny.setHunger();
    kenny.setSleep();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a food level of 100 when it is created', () => {
    expect(kenny.name).toEqual("Kenny");
    expect(kenny.foodLevel).toEqual(100);
  });

  test('should have a sleep level of 100 when it is created', () => {
    expect(kenny.sleepLevel).toEqual(10);
  });

  test('should get very hungry if 10 seconds pass without feeding', function() {
    jest.advanceTimersByTime(1000*60*10*15);
    expect(kenny.butDidYouDie()).toEqual(true);
  });

  test('should have a food level of 100 if it is fed', function() {
    jest.advanceTimersByTime(90001);
    kenny.feed();
    expect(kenny.foodLevel).toEqual(100);
  });

  test('should half food level when sleep level hits 0',() => {

    jest.advanceTimersByTime(1000*60*300);
      expect(kenny.foodLevel).toEqual(kenny.foodLevel / 2)
  });

  test('should have a sleep level of 10 if it sleeps', () => {
    jest.advanceTimersByTime(1000*60*60);
    kenny.sleep();
    expect(kenny.sleepLevel).toEqual(10);
  });
});