'use strict';

class Car {
  constructor() {
    this.color = 'Blue';
  }
  run() {
    return `I am a ${this.color} color car.`;
  }
}

// es5

// function Car() {
//   this.color = 'Blue';
// }

// Car.prototype.run = function() {
//   return `I am a ${this.color} color car.`;
// }

module.exports = Car;
