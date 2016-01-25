'use strict';

class Engine {
  constructor() {
    this.engine = 'V8';
  }
  type() {
    return `I am a ${this.engine} engine`;
  }
}

module.exports = Engine;
