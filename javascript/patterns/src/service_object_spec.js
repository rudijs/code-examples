'use strict';

var should = require('chai').should();

var Grade = require('./value_object');
var DetermineStudentPassingStatus = require('./service_object');

describe('Service Object', () => {
  var student = { name: 'Alice' };
  var determineStudentPassingStatus = new DetermineStudentPassingStatus(student);
  var assignments = [
    { grade: new Grade(0.5) },
    { grade: new Grade(0.8) },
    { grade: new Grade(0.9) },
    { grade: new Grade(0.6) }
  ];

  it('true', () => {
    // console.log('new Grade(0.5)',new Grade(0.5));
    // console.log('determineStudentPassingStatus', determineStudentPassingStatus);
    var grades = determineStudentPassingStatus.extractAssignmentGrades(assignments);

    var avg = determineStudentPassingStatus.averageAssignmentGrade(grades);
    console.log('avg', avg);

    var isPassing = determineStudentPassingStatus.determinePassingStatus(avg);
    console.log('isPassing', isPassing);

    var res = determineStudentPassingStatus.fromAssignments(assignments);
    console.log('res', res);

    true.should.be.true;
  });
});
