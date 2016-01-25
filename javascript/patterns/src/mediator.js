'use strict';

// Controls communication between objects so neither
// object has to be coupled to the others

var Task = require('./observer_task');

var NotifyService = function () {
  var message = 'Notifying ';
  this.update = function (task) {
    console.log(`${message} ${task.user} for task ${task.name}`);
  };
};
var AuditService = function () {
  var message = 'Auditing ';
  this.update = function (task) {
    console.log(`${message} ${task.user} for task ${task.name}`);
  };
};

var notifier = new NotifyService();
var auditer = new AuditService();

// revealing module pattern
var mediator = (function () {
  var channels = {};

  var subscribe = function (channel, context, func) {
    if (!mediator.channels[channel]) {
      mediator.channels[channel] = [];
    }
    mediator.channels[channel].push({
      context: context,
      func: func
    });
  }

  var publish = function (channel) {
    if (!this.channels[channel]) {
      return false;
    }

    var args = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < mediator.channels[channel].length; i++) {
      var sub = mediator.channels[channel][i];
      sub.func.apply(sub.context, args);
    }
  };

  return {
    channels: {},
    subscribe: subscribe,
    publish: publish
  };

})();

// subscribe
mediator.subscribe('complete', notifier, notifier.update);

var task1 = new Task({ name: 'create a task 1', user: 'Bob' });
task1.complete = function () {
  // publish here
  mediator.publish('complete', this);
  Task.prototype.complete.call(this);
}

task1.complete();
