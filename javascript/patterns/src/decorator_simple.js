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

// simple decoration of the Task object
var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2; // decoration
urgentTask.notify = function() { // decoration
  console.log('notifying important people');
}

urgentTask.complete();
urgentTask.save = function () { // decoration
  this.notify();
  Task.prototype.save.call(this);
}
urgentTask.save();
