'use strict';

import * as R from 'ramda';

/**
 * Service Objects are objects that perform a discrete operation or procedure.
 * When a process becomes complex, hard to test, or touches more than one type of model, a Service Object
 * is useful for cleaning up your code base.
 * Even a Service Object that performs one single step can be a valuable abstraction for clarity and testing.
 */

class DetermineStudentPassingStatus {
  constructor(student) {
    this.valueOf = () => student;
    this.student = student;
  }

  /**
   * The API method for calculating passing status from
   * a set of assignments that belong to the student
   * @param {Array} assignments - the student assignments
   * @return {Number} Average grade of assignments
   */
  fromAssignments(assignments) {
    return R.compose(
      this.determinePassingStatus,
      this.averageAssignmentGrade,
      this.extractAssignmentGrades
    )(assignments);
  }

  // return the 'grade' value objects from each assignment
  extractAssignmentGrades(assignments) {
    return R.pluck('grade')(assignments);
  }

  // take all grades and find the average percentage
  averageAssignmentGrade(grades) {
    // return grades.reduce(function(acc, grade) {
    var avg = grades.reduce(function(acc, grade) {
      return acc + grade.percentage;
    }, 0) / grades.length;
    return Number(avg.toFixed(2));
    // return avg;
  }

  // compare the averages from all assignments to the
  // minimumPassingPercentage value defined above
  determinePassingStatus(avgGrade) {
    return avgGrade >= DetermineStudentPassingStatus.minimumPassingPercentage;
  }

}

DetermineStudentPassingStatus.minimumPassingPercentage = 0.6;

// var student = {name: 'Alice'};
// var determineStudentPassingStatus = new DetermineStudentPassingStatus(student);
// console.log('student', student);

module.exports = DetermineStudentPassingStatus;
