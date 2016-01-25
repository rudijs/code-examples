'use strict';

// The Command Patter encapsulates the calling of a method as an object

var repo = {
  tasks: {},
  commands: [],
  get: function (id) {
    console.log('Getting task ', id);
    return {
      name: 'New task from database'
    }
  },
  save: function (task) {
    repo.tasks[task.id] = task;
    console.log('Saving ', task.name, ' to the database');
  },
  replay: function() {
    repo.commands.forEach(function(command) {
      // console.log('==> replay command', command);
      repo.executeNoLog(command.name, command.obj);
    });
  }
};

repo.execute = function (name) {
  var args = Array.prototype.slice.call(arguments, 1);

  repo.commands.push({
    name: name,
    obj: args[0]
  });

  if (repo[name]) {
    return repo[name].apply(repo, args);
  }
  return false;
};

repo.executeNoLog = function (name) {
  var args = Array.prototype.slice.call(arguments, 1);
  if (repo[name]) {
    return repo[name].apply(repo, args);
  }
  return false;
};

repo.execute('save', {
  id: 1,
  name: 'Task 1',
  completed: false
});
repo.execute('save', {
  id: 2,
  name: 'Task 2',
  completed: false
});
repo.execute('save', {
  id: 3,
  name: 'Task 3',
  completed: false
});
repo.execute('save', {
  id: 4,
  name: 'Task 4',
  completed: false
});

console.log('repo.tasks', repo.tasks);
repo.tasks = {};
console.log('repo.tasks', repo.tasks);
repo.replay();
console.log('repo.tasks', repo.tasks);