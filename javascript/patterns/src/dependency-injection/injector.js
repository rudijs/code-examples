'use strict';

var Jimple = require("jimple");

// create an injector
var injector = new Jimple();

// export the injector
// other modules that use this injector have access to all
// the registered resources below
module.exports = injector;

// register resources with the injector

injector.set('car', function() {
  var Car = require('./car');
  return new Car;
});

injector.set('engine', function() {
  var Engine = require('./engine');
  return new Engine;
});
