import { Tamagotchi } from '../src/tamagotchi'
import { JestEnvironment } from '@jest/environment';
import { exportAllDeclaration } from '@babel/types';

describe('Kenny', () => {
  jest.useFakeTimers();
  let kenny;

  beforeEach(function() {
    kenny = new Tamagotchi("Kenny", 0, 100);
    kenny.setHunger();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a food level of 100 when it is created', () => {
    expect(kenny.name).toEqual("Kenny");
    expect(kenny.foodLevel).toEqual(100);
  });
});