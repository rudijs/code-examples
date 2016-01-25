'use strict';

const fs = require('fs');

const file = './scripts.js';

revFile(file);

function revFile(file) {
  console.log('revFile');
  statFile(file);
}

function statFile(file) {
  console.log('statFile');
  fs.stat(file, isFile)
}

function isFile(err, stat) {
  console.log('isFile');
  if (err) {
    throw err;
  }
  console.log('stat', stat);
  fs.readFile(file, 'utf8', showFileContent);
}

function showFileContent(err, data) {
  if (err) {
    throw err;
  }
  console.log('showFileContent');
  console.log('data',data);
}
