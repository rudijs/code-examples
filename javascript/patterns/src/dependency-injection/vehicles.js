'use strict';

var injector = require('./injector');

// vehicle type car is available
exports.car = car(injector);

// creates a car
function car(injector) {
  var car = injector.get('car');

  var engine = injector.get('engine');

  return {
    car: car.run(),
    engine: engine.type()
  }
}
