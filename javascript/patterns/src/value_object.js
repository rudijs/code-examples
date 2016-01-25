'use strict';

/**
 * Bryan's article describes Value Objects as "simple objects whose equality is dependent
 * on their value rather than an identity."
 */

import * as R from 'ramda';

module.exports = class Grade {
  constructor(percentage) {
    // Set the value of this object to the initialized parameters
    this.valueOf = () => percentage;

    this.percentage = percentage;
    this.grade = this.report(this.percentage);
  }

  report(percentage) {
    // return _.find(Grade.grades(), function (grade) {
    //   return percentage >= grade.minimumPercentage;
    // });
    return R.find(
      R.propSatisfies(x => percentage >= x, 'minimumPercentage')
      )(Grade.grades());
  }

  letterGrade() {
    return this.grade.letter;
  }

  isPassing() {
    return this.grade.passing;
  }

  isBetterThan(grade) {
    return this.percentage > grade.percentage;
  }

  static grades() {
    return [
      { letter: 'A', minimumPercentage: 0.9, passing: true },
      { letter: 'B', minimumPercentage: 0.8, passing: true },
      { letter: 'C', minimumPercentage: 0.7, passing: true },
      { letter: 'D', minimumPercentage: 0.6, passing: true },
      { letter: 'F', minimumPercentage: 0, passing: false }
    ];
  }

};
