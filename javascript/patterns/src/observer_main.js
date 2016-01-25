'use strict';

// Subject
var Task = require('./observer_task');

// Observer
var NotifyService = function () {
  var message = 'Notifying ';
  this.update = function (task) {
    console.log(`${message} ${task.user} for task ${task.name}`);
  };
};
// Observer
var AuditService = function () {
  var message = 'Auditing ';
  this.update = function (task) {
    console.log(`${message} ${task.user} for task ${task.name}`);
  };
};

function ObserverList() {
  this.observerList = [];
}
ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj);
};
ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};
ObserverList.prototype.count = function () {
  return this.observerList.length;
}
ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice(index, 1);
}
ObserverList.prototype.indexOf = function (obj, startIndex) {
  var i = startIndex;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }

  return -1;
}

// make an Observable Subject
var ObservableTask = function (data) {
  Task.call(this, data);
  this.observers = new ObserverList();
};
ObservableTask.prototype.addObserver = function (observer) {
  this.observers.add(observer);
};
ObservableTask.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};
ObservableTask.prototype.notify = function (context) {
  var observerCount = this.observers.count();
  for (var i = 0; i < observerCount; i++) {
    this.observers.get(i)(context);
  }
};
ObservableTask.prototype.save = function () {
  this.notify(this);
  Task.prototype.save.call(this);
};

var notifier = new NotifyService();
var auditer = new AuditService();

// var task1 = new Task({ name: 'create a task 1', user: 'Bob' });
var task1 = new ObservableTask({ name: 'create a task 1', user: 'Bob' });

task1.addObserver(notifier.update);
task1.addObserver(auditer.update);

task1.save();

task1.removeObserver(auditer);

task1.save();
