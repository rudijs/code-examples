'use strict';

// a function object
var Task = function (name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function () {
  console.log('completing task: ', this.name);
  this.completed = true;
}

Task.prototype.save = function () {
  console.log('saving Task: ', this.name);

}

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

// decoration of the Task object
var UrgentTask = function (name, priority) {
  Task.call(this, name);
  this.priority = priority;
}
// link to Task prototype (makes a new object for the prototype out of Task's prototype)
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () { // decoration
  console.log('notifying important people');
}

UrgentTask.prototype.save = function () { // decoration
  this.notify();
  console.log('do special stuff before saving');
  Task.prototype.save.call(this);
}

var ut = new UrgentTask('This is urgent', 1);

ut.complete();
ut.save();
console.log(ut);


console.log('==> Print Object:');

printPrototype(ut);

function printPrototype(obj, i) {
  var n = Number(i || 0);
  var indent = Array(2 + n).join("-");

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(indent, key, ": ", obj[key]);
    }
  }

  if (obj) {
    if (Object.getPrototypeOf) {
      printPrototype(Object.getPrototypeOf(obj), n + 1);
    } else if (obj.__proto__) {
      printPrototype(obj.__proto__, n + 1);
    }
  }
}
